import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginInput, MemberInput } from '../../libs/dto/member/member.input';


@Resolver()
export class MemberResolver {
  constructor(private readonly memberService: MemberService) {}

  @Mutation(() => String)
  @UsePipes(ValidationPipe)
  public async signup(@Args("input") input: MemberInput): Promise<String> {
    console.log("Mutation: singup");
    console.log("input:", input);
    return this.memberService.signup();
  }

  @Mutation(() => String)
  @UsePipes(ValidationPipe)
  public async login(@Args("input") input: LoginInput): Promise<String> {
    console.log("Mutation: login")
    return this.memberService.login();
  }

  @Mutation(() => String)
  public async updateMember(): Promise<String> {
    console.log("Mutation: updateMember")
    return this.memberService.updateMember();
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
}
