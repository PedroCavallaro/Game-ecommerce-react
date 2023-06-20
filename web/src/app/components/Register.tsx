export default function RegisterForm() {


    return(
        <form action="localhost:3333/user" className="bg-[#252424] w-[20rem] h-[25rem] flex flex-col justify-center items-center gap-7">
            <label htmlFor="">
                <p>Nome de Usuário</p>
                <input type="text" name="username" className="bg-black w-[16rem] h-12 text-white" />
            </label>    
            <label htmlFor="">
                <p>Senha</p>
                <input type="password" name="password" className="bg-black h-12 w-[16rem] text-white"  />
            </label> 
           
            <a href="" className="bg-white text-black w-[16rem] h-12 flex justify-center cursor-pointer">
                <input type="button" value="Cadastrar" />
            </a>
        </form>
    )
}