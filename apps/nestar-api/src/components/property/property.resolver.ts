import { Mutation, Resolver } from '@nestjs/graphql';
import { PropertyService } from './property.service';

@Resolver()
export class PropertyResolver {
  constructor(private readonly memberService: PropertyService) {}

  @Mutation(() => String)
    public async createProperty(): Promise<String> {
      console.log("Mutation: singup");
      return await this.memberService.createProperty();
    }
}
