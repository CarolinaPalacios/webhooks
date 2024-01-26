import { Controller, Headers, Post, Body } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Post()
  webhookHandler(
    @Headers('x-github-event') githubEvent: string,
    @Body() body: any,
  ) {
    console.log({ githubEvent, body });
    return { hello: 'Hello World!' };
  }
}
