import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MemberService } from '../member/member.service';
import { ViewService } from '../view/view.service';
import { BoardArticleService } from '../board-article/board-article.service';

@Injectable()
export class CommentService {
  constructor(@InjectModel
    ("Comment") private readonly commentModel: Model<Comment>,
    private memberService: MemberService,
    private viewService: ViewService,
    private boardArticleService: BoardArticleService
  ) {}
}
