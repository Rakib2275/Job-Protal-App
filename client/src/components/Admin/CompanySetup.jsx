import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import "./setup.css";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import useGateCompanyById from "@/hooks/useGateCompanyById";

const CompanySetup = () => {
  const params = useParams();
  useGateCompanyById(params.id);

  const { singleCompany } = useSelector((store) => store.company);

  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null, // always start null
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle text input changes
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Handle file input change
  const changeFileHandler = (e) => {
    const file = e.target.files?.[0] || null;
    setInput({ ...input, file });
  };

  // Handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", input.name);
      formData.append("description", input.description);
      formData.append("website", input.website);
      formData.append("location", input.location);

      if (input.file) {
        formData.append("file", input.file); // ✅ must match backend multer
      }

      const res = await axios.put(
        `${COMPANY_API_END_POINT}/update/${params.id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/companies");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Pre-fill form when singleCompany is loaded
  useEffect(() => {
    if (singleCompany) {
      setInput({
        name: singleCompany.name || "",
        description: singleCompany.description || "",
        website: singleCompany.website || "",
        location: singleCompany.location || "",
        file: null, // always keep file input empty initially
      });
    }
  }, [singleCompany]);

  return (
    <div>
      <Navbar />
      <div className="setup">
        <form onSubmit={submitHandler}>
          <div className="company">
            <Button
              onClick={() => navigate("/admin/companies")}
              variant="outline"
              className="button"
            >
              <ArrowLeft />
              <span>Back</span>
            </Button>
            <h1>Company Setup</h1>
          </div>

          <div className="nameInput">
            <div>
              <Label>Company Name</Label>
              <Input
                className="input"
                type="text"
                name="name"
                value={input.name}
                onChange={changeEventHandler}
              />
            </div>

            <div>
              <Label>Description</Label>
              <Input
                className="input"
                type="text"
                name="description"
                value={input.description}
                onChange={changeEventHandler}
              />
            </div>

            <div>
              <Label>Website</Label>
              <Input
                className="input"
                type="text"
                name="website"
                value={input.website}
                onChange={changeEventHandler}
              />
            </div>

            <div>
              <Label>Location</Label>
              <Input
                className="input"
                type="text"
                name="location"
                value={input.location}
                onChange={changeEventHandler}
              />
            </div>

            <div>
              <Label>Logo</Label>
              <Input
                className="input"
                type="file"
                name="file" // ✅ must match backend multer single("file")
                onChange={changeFileHandler}
              />
            </div>
          </div>

          <Button type="submit" className="update" disabled={loading}>
            {loading ? "Updating..." : "Update"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CompanySetup;
