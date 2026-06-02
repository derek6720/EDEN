# Project InvestGate: AI-Powered Presentation Generation Platform

> Note: This document describes the product vision and phased intent. See `plan.md` and `progress.md` for the verified current implementation status.

## Overview
**InvestGate** is an advanced AI agent-driven web application designed to generate professional, highly customized presentations (PowerPoint, Canva-style decks) that do not look AI-generated. The platform blends the best features from industry leaders (Kimi, Gamma, ChronicleHQ, Claude) into a cohesive, premium experience aimed at agencies and teams. It features a multi-layered AI backend to ensure high-quality outputs, real-time collaboration, and a highly interactive, drag-and-drop sandbox editor.

## System Architecture & Tech Stack
To ensure a balanced, bloat-free, high-performance, and scalable production-ready platform, the architecture is split into a robust frontend, a clean architecture API layer, and a multi-layered AI backend.

### Frontend Stack (Fast, Lightweight, Interactive)
- **Framework**: Next.js (App Router) + React 19.
- **Styling**: Tailwind CSS for utility-first, responsive design with glassmorphism and premium aesthetics.
- **State Management**: Zustand for fast, boilerplate-free global state (slide data, UI toggles).
- **Drag & Drop Sandbox**: Lightweight drag-and-drop libraries (e.g., `@dnd-kit/core`) for a Canva-like element manipulation experience.
- **Collaboration (Real-time)**: WebSocket-based state syncing (e.g., Yjs or Liveblocks) for real-time multiplayer editing.

### Backend Stack (Clean Architecture, SOLID Principles)
- **Framework**: FastAPI (Python) for fast, asynchronous API endpoints.
- **Structure**: Strict Clean Architecture implementation (API Layer, Service Layer, Model Layer via Pydantic, Utils layer).
- **Database**: PostgreSQL with an async ORM (e.g., SQLAlchemy 2.0).
- **Real-time**: WebSockets for chat, interactive AI clarification polling, and live collaborative updates.
- **Export Engine**: Integration with Python libraries (`python-pptx`, headless browser tools for PDF/PNG exports).

### AI & Agent Layer (Multi-Layer Pipeline)
- **Philosophy**: The user doesn't choose the underlying model; instead, the backend utilizes an internal pipeline of specialized agents to refine the output iteratively to achieve the best possible result.
- **Layer 1: Orchestration & Clarification**: Interacts with the user, determines intent, and formulates Claude-style clarifying questions to guide the generation.
- **Layer 2: Content Generation**: Maps the final prompt and answers to structured, compelling slide content.
- **Layer 3: Layout & Theme Optimization**: Maps content to precise visual coordinates and ensures strict theme retention for the frontend sandbox.

---

## Core Features & Design Integrations

### 1. Dual Onboarding Workflows
- **Option A**: Select a pre-designed template -> Input a prompt -> Generate.
- **Option B**: Freeform prompt generation. The system interprets the raw prompt and builds everything from scratch or auto-selects a suitable template.

### 2. Interactive Chat & Clarification (Claude-Inspired)
- When a prompt is submitted, the AI can ask targeted, interactive questions to refine the presentation's goal before generation.
- Users can answer by clicking predefined options (chips) or typing a custom response.

### 3. The Sandbox Editor (Kimi & Canva Inspired)
- **View**: Upon generation, the presentation opens in a dedicated "Sandbox" view.
- **Editing**: Elements (text, images, shapes) are freely movable and draggable, providing a full Canva-like editing experience.
- **Theme Retention**: When a user adds a new slide within the sandbox, the active theme and layout constraints are automatically retained and applied.

### 4. Persistent Chat & Customization Panels (ChronicleHQ Inspired)
- **Side Chat Toggle**: A floating chat button exists on the side of the sandbox. Clicking it opens a persistent chat window, allowing the user to request AI modifications without leaving the editor. Closing it returns it to a discreet button.
- **Theme Customization Panel**: A dedicated button inside the chatbox opens a right-side panel for deep personalization (colors, typography, global layout settings).

### 5. Navigation & Layout
- **Left Scroll Bar**: A visual, scrollable timeline/sidebar of slides on the left (ChronicleHQ inspired) for seamless navigation between slides.

### 6. Export & Collaboration
- **Multiplayer Ready**: Designed specifically for agencies and teams; supports multiple users viewing and editing the sandbox simultaneously.
- **Omni-Format Exports**: Built-in support for downloading the final product as PNG, PDF, and PPTX formats. The goal is to make the platform powerful enough that external exporting isn't mandatory, but available.
- **Future Extensibility**: The modular architecture supports branching out from presentations to other visual formats (posters, social media graphics) in the future.

---

## Detailed Implementation Plan (Phased Approach)

### Phase 1: Foundation & Core Infrastructure
1. **Repository & Stack Setup**: Initialize Next.js frontend and FastAPI backend. Configure strict typing, linting, and environment variables.
2. **Backend Architecture Construction**: Set up the FastAPI backend with clean architecture layers. Define the core Pydantic schemas for `Presentation`, `Slide`, and `SlideElement`.
3. **State Management**: Implement the Zustand store on the frontend to handle the global presentation state.
4. **Basic UI Shell**: Build the main structural layout: Left Sidebar (Scroll Bar), Main Canvas Area, Right Panels.

### Phase 2: AI Pipeline & Chat Interface
1. **Chat Landing Page**: Build the input interface accommodating both onboarding options (Templates vs. Freeform).
2. **Clarification Engine**: Implement the AI routing and WebSocket logic to handle the Claude-style interactive Q&A flow.
3. **Multi-layer AI Integration**: Create the Python services for the orchestrator, content generator, and layout optimizer.
4. **Theme Customization Panel**: Build the right-side configuration drawer for theme personalization, triggered from the chat interface.

### Phase 3: The Sandbox Editor (Drag & Drop)
1. **Slide Rendering Engine**: Build robust React components that map the backend's JSON slide data to visually rich, positioned HTML elements.
2. **Drag and Drop Sandbox**: Integrate lightweight drag-and-drop mechanics to allow users to move and resize elements freely on the canvas.
3. **Theme Retention Engine**: Ensure adding a new slide copies and applies the global state theme properties seamlessly.
4. **Persistent Chat Interface**: Implement the collapsible, floating chat window on the side of the sandbox for continuous AI interaction.

### Phase 4: Collaboration & Export Engine
1. **Real-time Collaboration**: Integrate WebSocket-based state syncing to allow multiple users to edit the same presentation simultaneously.
2. **Export Microservices**: Develop the specific FastAPI endpoints and Python scripts required to convert the JSON state into PPTX, PDF, and PNG files reliably.
3. **Polish & Performance**: Optimize frontend rendering performance, finalize the premium UI (glassmorphism, micro-animations), and conduct rigorous E2E testing.

---

## Development Principles & Guidelines
- **SOLID & Clean Architecture**: Strictly adhered to on the FastAPI backend (API, Service, Model, Utils).
- **Type Safety**: Comprehensive Pydantic models for the backend; strict TypeScript interfaces for the frontend.
- **Observability & Logging**: Structured logging (`time.perf_counter`) for API endpoints and AI generation steps to monitor latency.
- **Error Handling**: Graceful degradation on the frontend; structured HTTP exceptions and `try/except` blocks on the backend.
- **Component Design**: Next.js frontend must prioritize modern, dynamic design aesthetics avoiding generic UI patterns.
