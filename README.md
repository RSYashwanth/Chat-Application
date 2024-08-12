# Chat App

A simple instant messaging application.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Examples](#examples)

## Introduction

This project is a concept of a simple instant messaging application that is integrated with the OpenAI API to analyze and query any chat log with natural language. This integration enables users to easily search through, summarize, query, and analyze their chat logs with other users using natural language with ease.

## Features

- Responsive and intuitive modern user interface
- 

## Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/RSYashwanth/Ray-Tracer.git
   cd Ray-Tracer
   ```
2. Build a docker image:
   ```sh
   docker build -t <ImageName> .
   ```
3. Run docker
   ```sh
   docker run -p 80:80 <ImageName>
   ```
4. Open localhost on any browser of choice

## Usage

1. Click the `Add Object` button to place a new sphere at origin
2. Adjust object parameters such as position, size, color, roughness, emmissive color, and emmissive strength
3. Customize and configure scene to preference (don't forget to add emmissive sources else the scene will appear pitch black)
4. Use wasd keys and arrow keys to position and rotate the camera appropriately in view port mode
5. Adjust samples count for the final output (higher sample counts lead to a better output but takes longer to render)
6. Click the `Render` button and view the ray traced output (open console first for rendering progess)

## Examples
1. ![Ray tracer screenshot 1](images/a.png)
2. ![Ray tracer screenshot 1](images/b.png)
3. ![Ray tracer screenshot 1](images/c.png)
4. ![Ray tracer screenshot 1](images/d.png)
   
