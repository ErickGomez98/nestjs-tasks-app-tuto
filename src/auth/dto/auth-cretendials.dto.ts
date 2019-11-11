import {
  IsString,
  MinLength,
  MaxLength,
  Matches,
  IsNotEmpty,
} from 'class-validator';

export class AuthCredentialsDto {
  @MaxLength(20)
  @MinLength(4)
  @IsString()
  @IsNotEmpty()
  username: string;

  @MaxLength(20)
  @MinLength(8)
  @IsString()
  @IsNotEmpty()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password too weak',
  })
  password: string;
}
