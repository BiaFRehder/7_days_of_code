import React from "react"
import { useForm } from "react-hook-form" 
import { Link } from "react-router-dom"
import classNames from "classnames"

import { App } from "../layouts/App"

export const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleFormSubmit = ({ email, password }) => {
        console.log("ACESSANDO APLICAÇÃO", email, password)
    }

    return (
        <App>
            <div className="flex flex-col w-screen h-screen justify-center place-items-center font-[Roboto]">
                <h1 className="text-3xl text-sky-500 pb-1">Aluritter</h1>
                <form className="flex flex-col w-full lg:w-1/4 md: w-1/3 sm:w-1/2 px-10 sm:px-0" onSubmit={handleSubmit(handleFormSubmit)}>
                    <div>
                        <input
                            {...register("email", {
                                required: true,
                                maxLength: 255,
                                minLength: 5
                            })}
                            className={classNames("w-full p-2 border rounded text-gray-500 border-slate-400 placeholder-slate-400",
                            {
                                "border-red-500": errors.email?.type === "required"
                            })}
                            type="email" 
                            placeholder="email@exemplo.com" 
                        />
                        {errors.email?.type === "required" ? (
                            <span className="text-xs text-red-500 pl-1">Email é obrigatório</span>
                        ) : null}
                        {errors.email?.type === "minLength" ? (
                            <span className="text-xs text-red-500 pl-1">O email precisa ter pelo menos cinco caracteres</span>
                        ) : null}
                    </div>
                    <div className="mt-2.5">
                        <input 
                            {...register("password", {
                                required: true,
                                maxLength: 255,
                                minLength: 8
                            })}
                            className={classNames("w-full p-2 border rounded text-gray-500 border-slate-400 placeholder-slate-400",
                                {
                                    "border-red-500": !!errors.password
                                }
                            )} 
                            type="password"
                            placeholder="Senha" 
                        />
                        {errors.password?.type === "required" ? (
                            <span className="text-xs text-red-500">Senha é obrigatória</span>
                        ) : null}
                        {errors.password?.type === "minLength" ? (
                            <span className="text-xs text-red-500">A senha precisa ter pelo menos 8 caracteres</span>
                        ) : null}
                    </div>
                    <button type="submit" className="bg-emerald-500 mt-5 p-2 rounded text-slate-100 hover:bg-emerald-600">Acessar plataforma</button>
                </form>
                <span className="text-sm mt-2 text-gray-500">
                    Não possui uma conta?{" "}
                    <Link to="/sign-up" className="text-sky-500 hover:underline">Crie uma agora!</Link>
                </span>
            </div>
        </App>
    )
}