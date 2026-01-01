import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { LoginInput, MemberInput } from '../../libs/dto/member/member.input';
import { Member } from '../../libs/dto/member/member';


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
