import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Like } from '../../libs/dto/like/like';
import { MemberService } from '../member/member.service';
import { ViewService } from '../view/view.service';
import { BoardArticleService } from '../board-article/board-article.service';
import { PropertyService } from '../property/property.service';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LikeService {
  constructor(@InjectModel
      ("Like") private readonly likeModel: Model<Like>,
      private memberService: MemberService,
      private viewService: ViewService,
      private boardArticleService: BoardArticleService,
      private propertyService: PropertyService,
    ) {}
}
