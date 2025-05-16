import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/use-auth-context";
import { GoogleAuthService } from "../../services/auth";
import LoadingSpinner from "../../components/loading-spinner";

export const GoogleCallbackPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { updateUser } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");
    
    if (token) {
      GoogleAuthService.handleCallback(token).then(() => {
        navigate("/profile");
      });
    } else {
      navigate("/");
    }
  }, [searchParams, navigate, updateUser]);

  return <LoadingSpinner />;
};