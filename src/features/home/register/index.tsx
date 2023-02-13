// import { useRef, useState } from "react";
// import { useForm } from "react-hook-form";
// import { ButtonSubmit, FormWrapper, TitleRegister } from "./style";
// import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

// const Register = () => {
//   let password;

//   const [toggle1, setToggle1] = useState(false);
//   const [toggle2, setToggle2] = useState(false);
//   const formSchema = Yup.object().shape({
//     password: Yup.string()
//       .required("Password is required")
//       .min(4, "Password length should be at least 4 characters")
//       .max(12, "Password cannot exceed more than 12 characters"),
//     cpassword: Yup.string()
//       .required("Confirm Password is required")
//       .min(4, "Password length should be at least 4 characters")
//       .max(12, "Password cannot exceed more than 12 characters")
//       .oneOf([Yup.ref("password")], "Passwords do not match"),
//   });
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm({ mode: "onTouched", resolver: yupResolver(formSchema) });
//   password = watch("password", "");

//   const onSubmit = (data: any) => console.log(data);

//   return (
//     <>
//       <TitleRegister>Demo Register</TitleRegister>
//       <FormWrapper>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* Name */}
//           <p>Name </p>
//           <input {...register("name")} />
//           {/* Email */}
//           <p>Email </p>
//           <input
//             id="email"
//             aria-invalid={errors.email ? "true" : "false"}
//             {...register("email", {
//               required: "required",
//               pattern: {
//                 value: /\S+@\S+\.\S+/,
//                 message: "Entered value does not match email format",
//               },
//             })}
//             type="email"
//             placeholder="example@mail.com"
//           />
//           {errors.email && <span role="alert">Email is require</span>}
//           {/* password and confirm password */}
//           <div className="type-box1">
//             <div className="Label1">
//               <label>Password</label>
//             </div>
//             <div className="input1">
//               <i id="passlock" className="fa fa-lock icon"></i>
//               <i
//                 id="showpass"
//                 className="fa fa-eye icon"
//                 onClick={() => {
//                   setToggle1(!toggle1);
//                 }}
//               ></i>
//               <input
//                 className="input-field"
//                 type={toggle1 ? "text" : "password"}
//                 placeholder="Password"
//                 name="password"
//                 {...register("password")}
//               ></input>
//               {/* <div>{errors?.password?.message}</div> */}
//             </div>
//             <p className="alerts">{errors.password?.message}</p>
//             <div className="Label2">
//               <label>Confirm Password</label>
//             </div>
//             <div className="input2">
//               <i id="passlock" className="fa fa-lock icon"></i>
//               <i
//                 id="showpass"
//                 className="fa fa-eye icon"
//                 onClick={() => {
//                   setToggle2(!toggle2);
//                 }}
//               ></i>
//               <input
//                 className="input-field"
//                 type={toggle2 ? "text" : "password"}
//                 placeholder="Password"
//                 name="cpassword"
//                 {...register("cpassword")}
//               ></input>
//             </div>
//             <p className="alerts">{errors.cpassword?.message}</p>
//             <div className="Button">
//               <button type="submit">Submit</button>
//             </div>
//           </div>
//           <ButtonSubmit type="submit"> SUBMIT </ButtonSubmit>
//         </form>
//       </FormWrapper>
//     </>
//   );
// };

// export default Register;

import Link from "next/link";

export interface ProjectProps {
  nameProject: string;
  describe: string;
  image: string;
  className: string;
  linkProject: string;
}

const Register = ({
  nameProject,
  describe,
  image,
  className,
  linkProject,
}: ProjectProps) => {
  return <></>;
};

export default Register;
