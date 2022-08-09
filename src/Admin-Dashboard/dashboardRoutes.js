import { Dashboard } from "./dashboard";
import { Users } from "./users";
import { Questions } from "./questions";

export function UserDashboardRoute() {
  return (
    <div>
      <Dashboard />
      <Users />
    </div>
  );
}

export function QuestionDashboardRoute() {
    return (
      <div>
        <Dashboard />
        <Questions />
      </div>
    );
  }
