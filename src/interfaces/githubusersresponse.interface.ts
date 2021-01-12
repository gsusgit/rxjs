import { GitHubUser } from "./githubuser.interface";

export interface GitHubUsersResponse {
    total_count:        number;
    incomplete_results: boolean;
    items:              GitHubUser[];
}