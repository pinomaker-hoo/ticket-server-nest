import { Board } from "src/board/domain/board.entity"
import { Comment } from "src/comment/domain/comment.entity"
import { BaseTimeEntity } from "src/common/entity/basetime.entity"
import { Point } from "src/point/domain/point.entity"
import { TicketUser } from "src/ticket-user/domain/ticketUser.entity"
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm"
import { Provider } from "../dto/user.provider.enum"

@Entity({ name: "tbl_user" })
@Unique(["email", "providerId"])
export class User extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  idx: number

  @Column({ type: "varchar", name: "user_email" })
  email: string

  @Column({ type: "varchar", name: "user_name" })
  name: string

  @Column({ type: "varchar", name: "user_password", nullable: true })
  password: string

  @Column({ type: "date", name: "user_birth", nullable: true })
  birth: Date

  @Column({ type: "boolean", name: "user_male", nullable: true })
  male: boolean

  @Column({ type: "varchar", name: "user_image", nullable: true })
  image: string

  @Column({ type: "varchar", name: "user_pass", nullable: true })
  pass: string

  @Column({ type: "enum", enum: Provider, name: "user_provider" })
  provider: Provider

  @Column({ type: "varchar", name: "user_provider_id", nullable: true })
  providerId: string

  @OneToMany((type) => Board, (board) => board.user)
  board: Board[]

  @OneToMany((type) => TicketUser, (ticketUser) => ticketUser.user)
  ticketUser: TicketUser[]

  @OneToMany((type) => Comment, (comment) => comment.user)
  comment: Comment[]

  @OneToMany((type) => Point, (point) => point.user)
  point: Point[]
}
