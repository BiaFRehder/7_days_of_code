import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import classNames from "classnames"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

// import { getAuth } from "../utils/firebase"
import { App } from "../layouts/App"

export const SignUp = () => {
    const [ requesting , setRequesting ] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const auth = getAuth()

    const handleFormSubmit = ({ email, password }) => {
        console.log("Criando uma nova conta...", email, password)
        setRequesting(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((credential) => {
                localStorage.setItem("access-token", credential.user.accessToken)
                navigate("/");
            })
            .catch((error) => console.error(error.message))
            .finally(() => setRequesting(false))
    }

    return (
        <App>
            <div className="flex flex-col w-screen h-screen place-items-center justify-center font-[Roboto]">
                <h1 className="text-3xl text-sky-500 text-center pb-1">Aluritter</h1>
                <p className="pb-5 text-gray-500">Crie uma nova conta e comece a alurittar agora mesmo</p>
                <form className="flex flex-col w-full lg:w-1/4 md:w-1/3 sm:w-1/2 px-10 sm:px-0" onSubmit={handleSubmit(handleFormSubmit)}>
                    <div>
                        <input 
                            {...register("email", {
                                required: true,
                                maxLength: 255,
                                minLength: 5
                            })}
                            className={classNames("w-full p-2 border rounded text-gray-500 border-slate-400 placeholder-slate-400", {
                                "border-red-500": errors.email?.type === "required"
                            })}
                            type="email" 
                            placeholder="email@exemplo.com" 
                            autoComplete="username"
                        />
                        {errors.email?.type === "required" ? (
                            <span className="text-xs text-red-500 pl-1">Email é obrigatório</span>
                        ) : null}
                        {errors.email?.type === "minLength" ? (
                            <span className="text-xs text-red-500 pl-1">O email precisa ter pelo menos 5 caracteres</span>
                        ) : null}
                    </div>
                    <div className="mt-2.5">
                        <input 
                            {...register("password", {
                                required: true,
                                maxLength: 255,
                                minLength: 8
                            })}
                            className={classNames("w-full p-2 border rounded text-gray-500 border-slate-400 placeholder-slate-400", {
                                "border-red-500": !!errors.password
                            })} 
                            type="password" 
                            placeholder="Senha" 
                            autoComplete="current-password"
                        />
                        {errors.password?.type === "require" ? (
                            <span className="text-xs text-red-500 pl-1">Senha é obrigatória</span>
                        ) : null}
                        {errors.password?.type === "minLength" ? (
                            <span className="text-xs text-red-500 pl-1">A senha precisa ter pelo menos 8 caracteres</span>
                        ) : null}
                        </div>
                    <button 
                        type="submit" 
                        className={classNames(
                            "bg-emerald-500 mt-5 p-2 rounded text-slate-100 hover:bg-emerald-600", {
                                "bg-slate-300": requesting,
                                "hover:bg-emerald-600": !requesting
                            })}
                        disabled={requesting}
                    >
                        Criar uma nova conta
                    </button>
                </form>
                <span className="text-sm text-gray-500 mt-2">
                    Já possui uma conta?{" "}
                    <Link to="/sign-in" className="text-sky-500 hover:underline">Crie uma agora!</Link>
                </span>
            </div>
        </App>
    )
}