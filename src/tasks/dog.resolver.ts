import { Dog } from './../graphql';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('Dog')
export class DogResolver {
  dogs: Dog[] = [
    {
      id: 1,
      name: 'Kendra',
      raza: 'SAbe xd ',
    },
  ];

  @Query()
  getDogs() {
    console.log('getDogs');
    return this.dogs;
  }

  @Query('getDog')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<any> {
    return this.dogs.find(c => c.id === id);
  }
}
