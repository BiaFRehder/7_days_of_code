import React from "react"
import { useForm } from "react-hook-form" 
import { Link } from "react-router-dom"
import classNames from "classnames"

import { App } from "../layouts/App"

export const SignIn = () => {
    return (
        <App>
            <div className="flex flex-col w-screen h-screen justify-center place-items-center font-[Roboto]">
                <h1 className="text-3xl text-sky-500 pb-1">Aluritter</h1>
                <form className="flex flex-col w-full lg:w-1/4 md: w-1/3 sm:w-1/2 px-10 sm:px-0">
                    <div>
                        <input className="w-full p-2 border rounded text-gray-500 border-slate-400 placeholder-slate-400" />
                    </div>
                    <div className="mt-2.5">
                        <input className="w-full p-2 border rounded text-gray-500 border-slate-400 placeholder-slate-400" />
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