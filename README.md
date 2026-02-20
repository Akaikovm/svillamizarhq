# Portfolio — Sebastian Villamizar

Professional Software Engineer portfolio. Built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Hosting: Firebase Hosting

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

The `dist` folder is ready to deploy.

## Deploy to Firebase

1. Create a project in [Firebase Console](https://console.firebase.google.com).
2. Install Firebase CLI: `npm i -g firebase-tools`
3. Log in: `firebase login`
4. In `.firebaserc`, replace `YOUR_FIREBASE_PROJECT` with your project ID.
5. Build and deploy:

```bash
npm run build
firebase deploy
```

## Customization

- **Projects**: Edit the `projects` array in `src/components/Projects.tsx` (titles, descriptions, links, stack).
- **Contact**: Update contact links (LinkedIn, GitHub, Instagram, WhatsApp, Email) in `src/components/Contact.tsx`.
- **Skills**: Adjust `skillGroups` in `src/components/Skills.tsx` and add icons in `src/components/SkillIcon.tsx`.
- **Copy**: Update text in Hero, About, and BeyondCode to match your experience.
- **Theme**: Dark/light toggle and persistence are in `src/contexts/ThemeContext.tsx`.

## Structure

```
src/
  components/   # Header, Hero, About, Skills, SkillIcon, Projects, BeyondCode, Contact, Footer
  contexts/     # ThemeContext (dark/light)
  utils/        # age.ts (birthday-based age for About)
  App.tsx
  main.tsx
  index.css
```
