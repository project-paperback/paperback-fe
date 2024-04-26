# Paperback ecommerce project

This repository contains the frontend work that complements the Paperback full-stack project, which provides a service offering books to users for purchase. It includes tools for authentication and payment functionalities, enabling users to create their own accounts and obtain their preferred books.

It's important to note that the payment and basket checkout implementations are for development purposes only. The API used to handle payments does not process real transactions, as this project is solely for demonstration purposes.

## Installation

Clone this repository by running the following command on your terminal:

```
git clone https://github.com/project-paperback/paperback-fe.git
```

Once cloned, get into the root directory of the project and run the following command on the terminal to install the node modules:

```
npm install
```

## Tools and packages

The following section is a description of the tools used and how to install them individually. All of them are included in this project already and will work once you install the node modules. See the **Installation** section if in doubt about how to install the node modules.

### Vite with React

The project uses Vite, a build tool that enhances development experience by simplifying the build configuration process with sensible defaults and minimal setup out of the box.

Follow the [Vite documentation](https://vitejs.dev/guide/) for a more in detail explanation and extra information.

### TailwindCSS

The project uses Tailwind CSS alongside vanilla CSS for styling. Tailwind CSS is a utility-first framework that enables easy customization of the web application's layout through pre-defined utility classes.

When installing TailwindCSS, be aware that there is a specific way for projects build with Vite.

Here is a link to [TailwindCSS Installation](https://tailwindcss.com/docs/guides/vite) for Vite with React projects.
