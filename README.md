# Parental Digital Literacy

This repository hosts a Docusaurus site that compiles digital literacy information for parents. All documentation lives in the `docs` directory and is organized by age group so families can quickly find relevant guidance.

## Documentation overview

- `docs/intro.md` – project introduction.
- `docs/age-0to1` – tips for babies encountering digital devices.
- `docs/age-1to6` – basics for early childhood.
- `docs/age-6to12` – elementary school topics such as the [GIGAスクール構想](docs/age-6to12/giga-school.md) which explains the nationwide program to provide each student with a device.
- `docs/age-12to15` – resources for junior high school students.
- `docs/age-15to18` – advanced information for high school students.

Example from `age-6to12/giga-school.md`:

```md
# GIGAスクール構想と適切な端末設定
GIGAスクール構想とは、文部科学省が主導となって進める全国の義務教育を受ける生徒1人に1台のコンピューターと高速ネットワークを整備する取り組みです。
```

## Getting Started

Ensure Node.js 18+ and [pnpm](https://pnpm.io) are installed. Common commands:

```bash
pnpm install        # install dependencies
pnpm start          # start the development server
pnpm build          # build the static site
pnpm typecheck      # verify TypeScript types
```

For additional details see [`docs/agent-guide.md`](docs/agent-guide.md).
