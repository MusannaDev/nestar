import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { LoginInput, MemberInput } from '../../libs/dto/member/member.input';
import { Member } from '../../libs/dto/member/member';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import type { ObjectId } from 'mongoose';


@Resolver()
export class MemberResolver {
  constructor(private readonly memberService: MemberService) {}

  @Mutation(() => Member)
  public async signup(@Args("input") input: MemberInput): Promise<Member> {
    console.log("Mutation: singup");
    return await this.memberService.signup(input);
  }

  @Mutation(() => Member)
  public async login(@Args("input") input: LoginInput): Promise<Member> {
    console.log("Mutation: login")
    return await this.memberService.login(input);
  } 

  // Authenticated 

  @UseGuards(AuthGuard)
  @Mutation(() => String)
  public async updateMember(@AuthMember('_id') memberId: ObjectId): Promise<String> {
    console.log("Mutation: updateMember");
    return this.memberService.updateMember();
  }

  @UseGuards(AuthGuard)
  @Mutation(() => String)
  public async checkAuth(@AuthMember('memberNick') memberNick: string): Promise<String> {
    console.log("Mutation: checkAuth");
    console.log("memberNick:", memberNick)
    return `Hi ${memberNick}`;
  }

  @Query(() => String)
  public async getMember(): Promise<String> {
    console.log("Mutation: singup")
    return this.memberService.getMember();
  }

  @Query(() => String)
  public async getMemberDetail(): Promise<String> {
    console.log("Mutation: getMemberDetail")
    return this.memberService.getMemberDetail();
  }

  /* ADMIN */

  // Authorization: ADMIN
  @Query(() => String)
  public async getAllMembersByAdmin(): Promise<String> {
    console.log("Mutation: getAllMembersByAdmin")
    return this.memberService.getAllMembersByAdmin();
  }

  @Mutation(() => String)
  public async updateMemberByAdmin(): Promise<String> {
    console.log("Mutation: updateMemberByAdmin")
    return this.memberService.updateMemberByAdmin();
  }

}
