package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;



@CronapiMetaData(type = "blockly")
@CronappSecurity(post = "Public", get = "Public", execute = "Public")
public class Login {

public static final int TIMEOUT = 300;

/**
 *
 * @param @ParamMetaData
 * @return Var
 */
// Login
public static Var CriarUsuario(@ParamMetaData(description = "nome") Var nome, @ParamMetaData(description = "email") Var email, @ParamMetaData(description = "senha") Var senha, @ParamMetaData(description = "confirmasenha") Var confirmasenha) throws Exception {
 return new Callable<Var>() {

   private Var userID = Var.VAR_NULL;

   public Var call() throws Exception {

    if (
    Var.valueOf(senha.equals(confirmasenha)).getObjectAsBoolean()) {

        userID =
        cronapi.util.Operations.generateUUID();

        cronapi.database.Operations.insert(Var.valueOf("app.entity.User"),Var.valueOf("password",
        cronapi.util.Operations.encryptPassword(senha)),Var.valueOf("normalizedUserName",
        cronapi.text.Operations.normalize(email)),Var.valueOf("name",nome),Var.valueOf("normalizedEmail",
        cronapi.text.Operations.normalize(email)),Var.valueOf("id",userID),Var.valueOf("userName",email),Var.valueOf("email",email));

        cronapi.database.Operations.insert(Var.valueOf("app.entity.ApplicationUser"),Var.valueOf("application",
        cronapi.util.Operations.getApplicationId()),Var.valueOf("user",userID));

        cronapi.util.Operations.callClientFunction( Var.valueOf("cronapi.screen.notify"), Var.valueOf("success"),
        Var.valueOf("Usuário cadastrado com sucesso!"));

        cronapi.util.Operations.callClientFunction(Var.valueOf("cronapi.screen.hideModal"),
        Var.valueOf("modalCadastro"));
    } else {

        cronapi.util.Operations.callClientFunction( Var.valueOf("cronapi.screen.notify"), Var.valueOf("error"),
        Var.valueOf("Senha não confere"));
    }
    return Var.VAR_NULL;
   }
 }.call();
}

}

