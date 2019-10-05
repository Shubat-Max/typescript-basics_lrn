import * as _ from "lodash";
import { GithubApiService } from "./GithubApiService";
import { User } from "./User";
import { Repo } from "./Repo";

let svc = new GithubApiService();

if (process.argv.length < 3) {
  console.log("Please pass the username as an argument.");
} else {
  let username = process.argv[2];
  svc.getUserInfo(username, (user: User) => {
    svc.getRepos(username, (repos: Repo[]) => {
      // sorting top 5 sized repos
      user.repos = _.take(_.sortBy(repos, [(repo: Repo) => repo.size * -1]), 5);
      console.log(user);
    });
  });
}
