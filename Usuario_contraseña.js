let usuario = "admin";
let contraseña = "1234";

if (usuario === "admin"){
    if (contraseña === "1234"){
        console.log("Acceso concedido");
    } else {
        console.log("Contraseña incorrecta");
    }
} else {
    console.log("Usuario no encontrado");
}