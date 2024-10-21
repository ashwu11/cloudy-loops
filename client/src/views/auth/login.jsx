import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { useState } from "react"
import { Link } from "react-router-dom"

const initialState = {
    email: "",
    password: ""
}

function AuthLogin() {

    const [formData, setFormData] = useState(initialState);

    function onSubmit() {
        console.log("login form submitted!");
    }

    return <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
            <h1 className="text-3xl font-bold tracking-wide text-foreground">Log in to your account</h1>
            <p className="mt-2">Don't have an account?
                <Link className="font-medium text-primary hover:underline ml-2" to="/auth/register">
                    Sign up
                </Link>
            </p>
        </div>
        <CommonForm
            formControls={loginFormControls}
            buttonText={"Log in"}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
        />
    </div>

}

export default AuthLogin;