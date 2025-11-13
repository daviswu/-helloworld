# GitHub Quickstart

This repository started as a simple self-teaching sandbox, so the GitHub workflow is intentionally straightforward. The steps below walk through the most common actions you might need when collaborating or backing up your work.

## 1. Create the repository on GitHub
1. Sign in to https://github.com/ and click **New repository**.
2. Give it a name such as `helloworld` (or any name you prefer) and keep it public or private as desired.
3. Skip adding files on GitHub since this local repo already has history.

## 2. Add the remote
```bash
git remote add origin git@github.com:<your-user>/<your-repo>.git
```

To verify the remote was added correctly, run `git remote -v`.

## 3. Push the existing history
```bash
git push -u origin work
```

The `-u` flag sets `origin/work` as the upstream branch so future pushes can use `git push` without arguments.

## 4. Keep work in sync
- **Pull remote changes** before starting new work: `git pull`.
- **Create feature branches** for experiments if needed: `git checkout -b feature/my-idea`.
- **Push frequently** to avoid losing progress: `git push origin <branch>`.

## 5. Open a pull request
1. Visit your repository on GitHub and click **Compare & pull request**.
2. Describe the change clearly and request reviews if collaborating with others.
3. Merge once checks pass.

Following the steps above ensures your local experimentation stays safely stored on GitHub and provides a simple collaboration path when you are ready to share it.
