import controller.AlunoController;
import model.Aluno;
import view.AlunoView;

public class Main {

    public static void main(String[] args) {

        Aluno model = new Aluno();
        AlunoView view = new AlunoView();
        AlunoController controller = new AlunoController(model, view);

        controller.setNome("Eduardo Bizzi");
        controller.setNota(10.0);

        controller.AtualizarView();
    }
}
