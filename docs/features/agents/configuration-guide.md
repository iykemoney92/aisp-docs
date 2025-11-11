---
sidebar_position: 1
title: Agent Configuration Guide
description: Complete guide to configuring your AI agents
---

# Agent Configuration Guide

Learn how to configure your AI agents in AI Studio Plus. This guide covers all the essential fields and options for creating powerful, customized agents.

## Overview

Agent configuration files are JSON documents that define your agent's behavior, capabilities, and interface. They tell AI Studio Plus:

- What your agent does
- What inputs it needs
- What outputs it produces
- How it should execute tasks
- How users interact with it

## Basic Structure

Every agent configuration has three main sections:

```json
{
  "metadata": { /* Agent info visible to users */ },
  "execution": { /* How your agent runs */ },
  "schemas": { /* Input/output structure */ }
}
```

## Metadata Section

The metadata section contains information displayed to users in the marketplace and agent details page.

### Required Fields

**name** (string)
The display name of your agent. Keep it clear and descriptive.

```json
"name": "Daily Motivation Generator"
```

**description** (string)
A brief description of what your agent does. This appears in search results.

```json
"description": "Get personalized motivational quotes every morning"
```

**category** (string)
Choose from available categories to help users discover your agent.

Available categories:
- `productivity` - Task management, time tracking, scheduling
- `health_fitness` - Wellness, exercise, nutrition
- `image` - Image generation and processing
- `video` - Video creation and editing
- `audio` - Music and sound generation
- `code` - Programming and development
- `data` - Analytics and data processing
- `research` - Information gathering and analysis
- `marketing` - Content creation and promotion
- `writing` - Text generation and editing
- `assistant` - General purpose helpers
- `education` - Learning and teaching
- `finance` - Money management and tracking
- `entertainment` - Games and fun
- `other` - Everything else

```json
"category": "productivity"
```

### Optional Fields

**logo** (string, URL)
A square image (recommended 512x512px) displayed as your agent's avatar.

```json
"logo": "https://example.com/agent-logo.png"
```

**tags** (array of strings)
Keywords to improve discoverability.

```json
"tags": ["motivation", "productivity", "daily", "wellness"]
```

**version** (string)
Track your agent's version for updates.

```json
"version": "1.0.0"
```

**accessLevel** (string)
Control who can use your agent:
- `public` - Anyone can discover and use (default)
- `private` - Only you can use
- `unlisted` - Anyone with the link can use, but not in marketplace

```json
"accessLevel": "public"
```

**author** (object)
Information about the creator (automatically populated).

```json
"author": {
  "name": "John Doe",
  "email": "john@example.com"
}
```

## Execution Section

This section defines how your agent runs and processes requests.

### Required Fields

**model** (string)
The AI model your agent uses.

Available models:
- `gpt-4o` - Most capable, best for complex tasks
- `gpt-4o-mini` - Fast and efficient, good for simple tasks
- `claude-3-5-sonnet` - Excellent for creative writing
- `claude-3-5-haiku` - Quick responses, good for chat
- `gemini-2.0-flash-exp` - Experimental, fast inference

```json
"model": "gpt-4o-mini"
```

**systemPrompt** (string)
The core instructions that define your agent's behavior. This is the most important field!

Tips for writing system prompts:
- Be specific about the agent's role
- Define the tone and style
- Include any rules or constraints
- Provide examples of desired output

```json
"systemPrompt": "You are a motivational coach who provides uplifting, personalized quotes based on the user's current mood and goals. Always be positive, encouraging, and specific to their situation."
```

### Optional Fields

**temperature** (number, 0-2)
Controls randomness in responses:
- `0` - Deterministic, same input = same output
- `0.7` - Balanced (default)
- `1.5` - Very creative and varied

```json
"temperature": 0.7
```

**maxTokens** (number)
Maximum length of generated responses.

```json
"maxTokens": 500
```

**tools** (array)
External tools your agent can use:

```json
"tools": [
  {
    "type": "web_search",
    "enabled": true
  },
  {
    "type": "image_generation",
    "enabled": true,
    "provider": "dall-e-3"
  }
]
```

Available tools:
- `web_search` - Search the internet
- `image_generation` - Create images
- `code_execution` - Run code
- `file_upload` - Accept file uploads

**responseFormat** (string)
How the agent should format responses:
- `text` - Plain text (default)
- `markdown` - Formatted text with markdown
- `json` - Structured JSON output

```json
"responseFormat": "markdown"
```

## Schemas Section

Define the structure of inputs and outputs.

### Input Schema

Describes what information users need to provide.

```json
"inputSchema": {
  "type": "object",
  "properties": {
    "mood": {
      "type": "string",
      "description": "Your current mood",
      "enum": ["happy", "stressed", "motivated", "tired"]
    },
    "goal": {
      "type": "string",
      "description": "What you want to achieve today"
    }
  },
  "required": ["mood"]
}
```

### Output Schema

Describes what your agent returns.

```json
"outputSchema": {
  "type": "object",
  "properties": {
    "quote": {
      "type": "string",
      "description": "Motivational quote"
    },
    "action": {
      "type": "string",
      "description": "Suggested action to take"
    }
  }
}
```

### Schema UI Hints

Add hints to improve the user interface:

```json
"properties": {
  "description": {
    "type": "string",
    "ui:widget": "textarea",
    "ui:placeholder": "Describe your task..."
  }
}
```

Available UI widgets:
- `textarea` - Multi-line text input
- `select` - Dropdown menu
- `checkbox` - Boolean toggle
- `file` - File upload
- `date` - Date picker

## Complete Example

Here's a complete agent configuration:

```json
{
  "metadata": {
    "name": "Daily Motivation Generator",
    "description": "Get personalized motivational quotes every morning",
    "category": "productivity",
    "logo": "https://example.com/motivation-logo.png",
    "tags": ["motivation", "productivity", "daily", "wellness"],
    "version": "1.0.0",
    "accessLevel": "public"
  },
  "execution": {
    "model": "gpt-4o-mini",
    "systemPrompt": "You are a motivational coach who provides uplifting, personalized quotes based on the user's current mood and goals. Always be positive, encouraging, and specific to their situation. End each response with a simple action they can take right now.",
    "temperature": 0.8,
    "maxTokens": 300,
    "responseFormat": "markdown"
  },
  "schemas": {
    "inputSchema": {
      "type": "object",
      "properties": {
        "mood": {
          "type": "string",
          "description": "How are you feeling right now?",
          "enum": ["happy", "stressed", "motivated", "tired", "anxious"],
          "ui:widget": "select"
        },
        "goal": {
          "type": "string",
          "description": "What do you want to achieve today?",
          "ui:widget": "textarea",
          "ui:placeholder": "e.g., finish my project, exercise, be more patient"
        }
      },
      "required": ["mood"]
    },
    "outputSchema": {
      "type": "object",
      "properties": {
        "quote": {
          "type": "string",
          "description": "Personalized motivational quote"
        },
        "action": {
          "type": "string",
          "description": "One simple action to take"
        },
        "affirmation": {
          "type": "string",
          "description": "Positive affirmation"
        }
      }
    }
  }
}
```

## Best Practices

### 1. Write Clear System Prompts

Your system prompt is your agent's personality and instructions. Make it:
- **Specific** - Define exactly what the agent should do
- **Actionable** - Give clear guidelines for behavior
- **Contextual** - Include relevant background information

### 2. Design User-Friendly Inputs

- Use descriptive field names
- Provide helpful descriptions
- Add UI hints for better user experience
- Only require essential fields

### 3. Choose the Right Model

- **gpt-4o** for complex reasoning and analysis
- **gpt-4o-mini** for quick, simple tasks
- **claude-3-5-sonnet** for creative writing
- **gemini-2.0-flash-exp** for experimental features

### 4. Test Thoroughly

Before publishing:
- Test with various inputs
- Check edge cases
- Verify outputs match expectations
- Get feedback from others

### 5. Iterate and Improve

- Monitor user feedback
- Update based on usage patterns
- Refine prompts for better results
- Add new features over time

## Validation

AI Studio Plus validates your configuration before allowing publication. Common errors:

**Invalid JSON**
Ensure your JSON is properly formatted with matching brackets and quotes.

**Missing Required Fields**
All required fields in metadata, execution, and schemas must be present.

**Invalid Schema**
Schemas must follow JSON Schema specification (Draft 7).

**Model Not Available**
Use only supported model names.

## Next Steps

- [See Example Configurations](./example-configurations) for real-world examples
- [Review JSON Schema Reference](./json-schema-reference) for detailed schema options
- [Create Your First Agent](https://studio.aisp.app/gpt/new-agent) in AI Studio Plus

## Need Help?

- Join our [Discord Community](https://discord.gg/aisp) for support
- Check [Common Issues](/troubleshooting/agents) in troubleshooting
- Contact support at support@aisp.app
