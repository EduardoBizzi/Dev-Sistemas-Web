package controller;

import model.Aluno;
import view.AlunoView;

public class AlunoController {
    private Aluno model;
    private AlunoView view;

    public AlunoController (Aluno model, AlunoView view){
        this.model = model;
        this.view = view;
    }

    public void setNome(String nome){
        model.setNome(nome);
    }
    public void setNota(Double nota){
        model.setNota(nota);
    }

    public void AtualizarView (){
        view.statusAluno(model.getNome(), model.getNota());
    }
}
