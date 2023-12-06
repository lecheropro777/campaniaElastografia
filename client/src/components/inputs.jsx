
export const InputText=(name)=>{
    return(
        <div>
            <input type="text" name={name}></input>
        </div>
    )
}

export const InputEmail=()=>{

    return(
        <div></div>
    )
}

export const InputPassword=({password})=>{

    return(
        <label>Password: {password}</label>
    )
}