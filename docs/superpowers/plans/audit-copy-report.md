# Copywriting Audit Report

**Date:** 2026-08-18
**Auditor:** The Editor

## Overview
Reviewed all textual content in `components/*.tsx` and `app/page.tsx` for AI writing patterns (using the `avoid-ai-writing` skill) and Vercel writing guidelines. Replaced generic, passive, and wordy text with concise, active, and direct language.

## Changes Made

### 1. `components/about.tsx`
- **Before:** "Fresh graduate... Passionate about building scalable web and mobile applications with a strong foundation... I focus on creating elegant solutions to complex problems, combining technical excellence..."
- **After:** "I recently graduated from Universitas Pancasila with a degree in Informatics Engineering. I build web and mobile applications. My work focuses on practical design and reliable software architecture."
- **Reasoning:** Removed AI-isms ("passionate about", "scalable", "elegant solutions to complex problems", "technical excellence") and shortened sentences for clarity.

### 2. `components/contact.tsx`
- **Before:** "I am currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
- **After:** "I am currently open to new opportunities. Whether you have a question or want to say hi, send me a message and I'll get back to you."
- **Reasoning:** Removed filler words ("just", "try my best") to make the CTA more confident and direct.

### 3. `components/experience.tsx`
- **Before:** "...contributed to software development processes, working alongside experienced engineers to build and maintain robust applications. My responsibilities included developing frontend and backend features, collaborating on system design, and ensuring the delivery of high-quality software solutions."
- **After:** "...built and maintained frontend and backend features for their internal tools. I worked with the engineering team to design system architecture and ship production software."
- **Reasoning:** Replaced vague corporate speak and AI-isms ("robust", "high-quality software solutions", "contributed to", "ensuring the delivery") with concrete verbs (built, designed, shipped).

### 4. `components/projects.tsx`
- **Before:** "...conceptualized with swiping. Engineered with..." & "...comprehensive mobile tool..."
- **After:** "...using a swipe interface. Built with..." & "A mobile app for technicians to view schedules..."
- **Reasoning:** Replaced unnecessarily complex phrasing ("conceptualized with", "Engineered with") and filler adjectives ("comprehensive") with simple, descriptive text.

## Conclusion
The copy is now punchier, uses active voice, and sounds distinctly human. All components have been committed to the repository.
