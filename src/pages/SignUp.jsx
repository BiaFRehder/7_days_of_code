import React from "react"
import { Link } from "react-router-dom"

import { App } from "../layouts/App"

export const SignUp = () => {
    return (
        <App>
            <div className="flex flex-col w-screen h-screen place-items-center justify-center font-[Roboto]">
                <h1 className="text-3xl text-sky-500 text-center pb-1">Aluritter</h1>
                <p className="pb-5 text-gray-500">Crie uma nova conta e comece a alurittar agora mesmo</p>
                <form className="flex flex-col w-full lg:w-1/4 md:w-1/3 sm:w-1/2 px-10 sm:px-0">
                    <div>
                        <input className="w-full p-2 border rounded text-gray-500 border-slate-400 placeholder-slate-400" type="email" placeholder="email@exemplo.com" />
                        </div>
                    <div className="mt-2.5">
                        <input className=" w-full p-2 border rounded text-gray-500 border-slate-400 placeholder-slate-400" type="password" name="password" id="password" placeholder="Senha" />
                        </div>
                    <button type="submit" className="bg-emerald-500 mt-5 p-2 rounded text-slate-100 hover:bg-emerald-600">Criar uma nova conta</button>
                </form>
                <span className="text-sm text-gray-500 mt-2">
                    Já possui uma conta?{" "}
                    <Link to="/sign-in" className="text-sky-500 hover:underline">Crie uma agora!</Link>
                </span>
            </div>
        </App>
    )
}