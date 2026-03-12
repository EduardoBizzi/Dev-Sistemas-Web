package model;

public class Aluno {
    private String nome;
    private double nota;

    public void setNome(String nome) {
        this.nome = nome;
    }
    public void setNota(double nota) {
        this.nota = nota;
    }

    public double getNota() {
        return nota;
    }
    public String getNome() {
        return nome;
    }
}
