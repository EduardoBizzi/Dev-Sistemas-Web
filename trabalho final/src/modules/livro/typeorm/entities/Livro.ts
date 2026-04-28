import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('livros')
export default class Livro {

  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  nome!: string;

  @Column('text')
  autores!: string; // pode salvar múltiplos autores separados por vírgula

  @Column('int')
  ano!: number;

  @Column()
  tipo!: string; // ex: "Ficção", "Técnico", etc.

  @Column('int', { default: 0 })
  quantidade!: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
