import { Mutation, Resolver, Query } from '@nestjs/graphql';
import { MemberService } from './member.service';


@Resolver()
export class MemberResolver {
  constructor(private readonly memberService: MemberService) {}

  @Mutation(() => String)
  public async signup(): Promise<String> {
    console.log("Mutation: singup")
    return this.memberService.signup();
  }
  @Mutation(() => String)
  public async login(): Promise<String> {
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
