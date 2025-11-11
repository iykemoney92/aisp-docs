---
sidebar_position: 2
title: Example Agent Configurations
description: Real-world examples of agent configurations for various use cases
---

# Example Agent Configurations

Learn from complete, working agent configurations. Copy these examples and customize them for your own agents.

## Simple Text Agent

A basic agent that provides information without requiring complex inputs.

**Use Case:** Daily affirmations, simple Q&A, fact retrieval

```json
{
  "metadata": {
    "name": "Daily Affirmation Bot",
    "description": "Start your day with a positive affirmation",
    "category": "wellness",
    "tags": ["affirmation", "motivation", "daily", "positivity"],
    "version": "1.0.0",
    "accessLevel": "public"
  },
  "execution": {
    "model": "gpt-4o-mini",
    "systemPrompt": "You are a wellness coach specializing in positive affirmations. Create unique, personalized affirmations that are uplifting and empowering. Each affirmation should be present-tense, positive, and specific.",
    "temperature": 0.9,
    "maxTokens": 150,
    "responseFormat": "text"
  },
  "schemas": {
    "inputSchema": {
      "type": "object",
      "properties": {
        "focus": {
          "type": "string",
          "description": "What area would you like to focus on?",
          "enum": ["confidence", "health", "relationships", "career", "creativity"],
          "ui:widget": "select"
        }
      }
    },
    "outputSchema": {
      "type": "object",
      "properties": {
        "affirmation": {
          "type": "string"
        }
      }
    }
  }
}
```

---

## Content Creator Agent

An agent that generates content with multiple output fields.

**Use Case:** Blog posts, social media, marketing copy

```json
{
  "metadata": {
    "name": "Social Media Content Generator",
    "description": "Create engaging social media posts with hashtags",
    "category": "marketing",
    "logo": "https://example.com/social-media-logo.png",
    "tags": ["social media", "marketing", "content", "instagram", "twitter"],
    "version": "1.2.0",
    "accessLevel": "public"
  },
  "execution": {
    "model": "gpt-4o",
    "systemPrompt": "You are a social media expert who creates engaging, platform-optimized content. For each request:\n1. Write compelling copy that hooks readers\n2. Include relevant hashtags (5-10 for Instagram, 2-3 for Twitter)\n3. Suggest the best posting time\n4. Keep within character limits\n\nTone should match the platform and brand voice requested.",
    "temperature": 0.8,
    "maxTokens": 500,
    "responseFormat": "json"
  },
  "schemas": {
    "inputSchema": {
      "type": "object",
      "properties": {
        "platform": {
          "type": "string",
          "description": "Which platform?",
          "enum": ["Instagram", "Twitter", "LinkedIn", "Facebook", "TikTok"],
          "ui:widget": "select"
        },
        "topic": {
          "type": "string",
          "description": "What's your post about?",
          "ui:widget": "textarea",
          "ui:placeholder": "e.g., launching a new product, sharing a tip, behind-the-scenes"
        },
        "tone": {
          "type": "string",
          "description": "What tone should the post have?",
          "enum": ["professional", "casual", "funny", "inspirational", "educational"],
          "ui:widget": "select"
        },
        "callToAction": {
          "type": "boolean",
          "description": "Include a call-to-action?",
          "default": true
        }
      },
      "required": ["platform", "topic", "tone"]
    },
    "outputSchema": {
      "type": "object",
      "properties": {
        "caption": {
          "type": "string",
          "description": "The main post text"
        },
        "hashtags": {
          "type": "array",
          "items": { "type": "string" },
          "description": "Relevant hashtags"
        },
        "bestTime": {
          "type": "string",
          "description": "Suggested posting time"
        },
        "tips": {
          "type": "string",
          "description": "Platform-specific tips"
        }
      }
    }
  }
}
```

---

## Data Analysis Agent

An agent that processes structured input and provides insights.

**Use Case:** Report generation, data interpretation, analytics

```json
{
  "metadata": {
    "name": "Fitness Progress Analyzer",
    "description": "Analyze your workout data and get insights",
    "category": "health_fitness",
    "tags": ["fitness", "analytics", "health", "workout", "progress"],
    "version": "1.0.0"
  },
  "execution": {
    "model": "gpt-4o",
    "systemPrompt": "You are a fitness analyst who reviews workout data and provides actionable insights. Analyze the user's progress, identify patterns, celebrate achievements, and provide specific recommendations for improvement. Always be encouraging and data-driven.",
    "temperature": 0.3,
    "maxTokens": 800,
    "responseFormat": "markdown"
  },
  "schemas": {
    "inputSchema": {
      "type": "object",
      "properties": {
        "workoutType": {
          "type": "string",
          "description": "What type of workout?",
          "enum": ["strength", "cardio", "yoga", "sports", "mixed"]
        },
        "duration": {
          "type": "number",
          "description": "Duration in minutes"
        },
        "frequency": {
          "type": "number",
          "description": "Workouts per week"
        },
        "goal": {
          "type": "string",
          "description": "Your fitness goal",
          "enum": ["lose weight", "build muscle", "improve endurance", "increase flexibility", "general fitness"]
        },
        "challenges": {
          "type": "string",
          "description": "Any challenges you're facing?",
          "ui:widget": "textarea",
          "ui:placeholder": "e.g., lack of motivation, time constraints, plateauing"
        }
      },
      "required": ["workoutType", "duration", "frequency", "goal"]
    },
    "outputSchema": {
      "type": "object",
      "properties": {
        "summary": {
          "type": "string",
          "description": "Overall assessment"
        },
        "achievements": {
          "type": "array",
          "items": { "type": "string" },
          "description": "What you're doing well"
        },
        "recommendations": {
          "type": "array",
          "items": { "type": "string" },
          "description": "Specific actions to improve"
        },
        "nextSteps": {
          "type": "string",
          "description": "Your action plan"
        }
      }
    }
  }
}
```

---

## Research Assistant Agent

An agent with web search capabilities for research tasks.

**Use Case:** Information gathering, fact-checking, research

```json
{
  "metadata": {
    "name": "Research Assistant Pro",
    "description": "Deep dive into any topic with web search and analysis",
    "category": "research",
    "tags": ["research", "analysis", "web search", "information", "facts"],
    "version": "2.0.0"
  },
  "execution": {
    "model": "gpt-4o",
    "systemPrompt": "You are an expert research assistant. When given a topic:\n1. Use web search to find current, reliable information\n2. Synthesize findings from multiple sources\n3. Cite sources clearly\n4. Present information in an organized, easy-to-understand format\n5. Distinguish between facts and opinions\n6. Highlight any conflicting information found",
    "temperature": 0.4,
    "maxTokens": 2000,
    "responseFormat": "markdown",
    "tools": [
      {
        "type": "web_search",
        "enabled": true,
        "maxResults": 10
      }
    ]
  },
  "schemas": {
    "inputSchema": {
      "type": "object",
      "properties": {
        "topic": {
          "type": "string",
          "description": "What do you want to research?",
          "ui:widget": "textarea",
          "ui:placeholder": "e.g., latest developments in renewable energy"
        },
        "depth": {
          "type": "string",
          "description": "How detailed should the research be?",
          "enum": ["quick overview", "moderate detail", "comprehensive deep dive"],
          "default": "moderate detail"
        },
        "focusArea": {
          "type": "string",
          "description": "Any specific aspect to focus on?",
          "ui:placeholder": "e.g., environmental impact, cost analysis, future trends"
        }
      },
      "required": ["topic"]
    },
    "outputSchema": {
      "type": "object",
      "properties": {
        "summary": {
          "type": "string",
          "description": "Executive summary"
        },
        "keyFindings": {
          "type": "array",
          "items": { "type": "string" },
          "description": "Main discoveries"
        },
        "detailedAnalysis": {
          "type": "string",
          "description": "In-depth information"
        },
        "sources": {
          "type": "array",
          "items": { "type": "string" },
          "description": "Referenced sources"
        }
      }
    }
  }
}
```

---

## Creative Writing Agent

An agent optimized for storytelling and creative content.

**Use Case:** Story writing, character development, creative prompts

```json
{
  "metadata": {
    "name": "Story Weaver",
    "description": "Your creative writing companion for stories and narratives",
    "category": "writing",
    "tags": ["creative writing", "stories", "fiction", "narrative", "characters"],
    "version": "1.1.0"
  },
  "execution": {
    "model": "claude-3-5-sonnet",
    "systemPrompt": "You are a creative writing mentor and storyteller. Help users develop compelling narratives with:\n- Vivid descriptions and imagery\n- Well-developed characters\n- Engaging dialogue\n- Proper story structure (beginning, middle, end)\n- Literary devices and techniques\n\nAdapt your style to match the user's chosen genre and tone.",
    "temperature": 1.2,
    "maxTokens": 1500,
    "responseFormat": "markdown"
  },
  "schemas": {
    "inputSchema": {
      "type": "object",
      "properties": {
        "genre": {
          "type": "string",
          "description": "Story genre",
          "enum": ["fantasy", "sci-fi", "mystery", "romance", "horror", "thriller", "literary fiction", "adventure"],
          "ui:widget": "select"
        },
        "prompt": {
          "type": "string",
          "description": "Story idea or prompt",
          "ui:widget": "textarea",
          "ui:placeholder": "e.g., A detective discovers they can hear thoughts, but only lies"
        },
        "length": {
          "type": "string",
          "description": "Desired story length",
          "enum": ["flash fiction (500 words)", "short story (1000 words)", "chapter (2000 words)"],
          "default": "short story (1000 words)"
        },
        "tone": {
          "type": "string",
          "description": "Story tone",
          "enum": ["dark", "lighthearted", "serious", "humorous", "melancholic", "hopeful"]
        }
      },
      "required": ["genre", "prompt"]
    },
    "outputSchema": {
      "type": "object",
      "properties": {
        "story": {
          "type": "string",
          "description": "The complete story"
        },
        "writingNotes": {
          "type": "string",
          "description": "Literary techniques used"
        },
        "suggestions": {
          "type": "string",
          "description": "Ideas for expanding the story"
        }
      }
    }
  }
}
```

---

## Meal Planning Agent

An agent that provides structured, practical advice.

**Use Case:** Meal planning, recipes, nutrition

```json
{
  "metadata": {
    "name": "Smart Meal Planner",
    "description": "Personalized meal plans based on your preferences and goals",
    "category": "health_fitness",
    "tags": ["nutrition", "meals", "recipes", "diet", "healthy eating"],
    "version": "1.3.0"
  },
  "execution": {
    "model": "gpt-4o-mini",
    "systemPrompt": "You are a nutritionist and meal planning expert. Create practical, delicious meal plans that:\n- Match dietary restrictions and preferences\n- Meet nutritional goals\n- Use accessible, affordable ingredients\n- Include preparation tips\n- Provide variety and balance\n\nAlways consider portion sizes and macronutrients.",
    "temperature": 0.7,
    "maxTokens": 1200,
    "responseFormat": "markdown"
  },
  "schemas": {
    "inputSchema": {
      "type": "object",
      "properties": {
        "dietType": {
          "type": "string",
          "description": "Dietary preference",
          "enum": ["omnivore", "vegetarian", "vegan", "pescatarian", "keto", "paleo", "Mediterranean"],
          "ui:widget": "select"
        },
        "meals": {
          "type": "array",
          "description": "Which meals to plan?",
          "items": {
            "type": "string",
            "enum": ["breakfast", "lunch", "dinner", "snacks"]
          },
          "default": ["breakfast", "lunch", "dinner"]
        },
        "allergies": {
          "type": "string",
          "description": "Any allergies or foods to avoid?",
          "ui:placeholder": "e.g., nuts, dairy, shellfish"
        },
        "goal": {
          "type": "string",
          "description": "Nutrition goal",
          "enum": ["weight loss", "muscle gain", "maintenance", "energy boost", "general health"]
        },
        "cookingTime": {
          "type": "string",
          "description": "Available cooking time",
          "enum": ["under 15 min", "15-30 min", "30-60 min", "no limit"]
        }
      },
      "required": ["dietType", "goal"]
    },
    "outputSchema": {
      "type": "object",
      "properties": {
        "mealPlan": {
          "type": "string",
          "description": "Complete meal plan with recipes"
        },
        "shoppingList": {
          "type": "array",
          "items": { "type": "string" },
          "description": "Ingredients needed"
        },
        "nutritionSummary": {
          "type": "string",
          "description": "Macro breakdown and calories"
        },
        "prepTips": {
          "type": "string",
          "description": "Meal prep suggestions"
        }
      }
    }
  }
}
```

---

## Code Helper Agent

An agent for programming assistance.

**Use Case:** Code generation, debugging, explanation

```json
{
  "metadata": {
    "name": "Code Mentor",
    "description": "Your programming assistant for coding help and debugging",
    "category": "code",
    "tags": ["programming", "coding", "debugging", "development", "software"],
    "version": "2.1.0"
  },
  "execution": {
    "model": "gpt-4o",
    "systemPrompt": "You are an expert programmer and teacher. Help users with:\n- Writing clean, efficient code\n- Debugging issues\n- Explaining concepts clearly\n- Best practices and patterns\n- Code optimization\n\nAlways:\n- Provide working code examples\n- Explain your reasoning\n- Suggest improvements\n- Follow language conventions",
    "temperature": 0.2,
    "maxTokens": 2000,
    "responseFormat": "markdown"
  },
  "schemas": {
    "inputSchema": {
      "type": "object",
      "properties": {
        "language": {
          "type": "string",
          "description": "Programming language",
          "enum": ["JavaScript", "Python", "Java", "C++", "Go", "Rust", "TypeScript", "Swift", "PHP"],
          "ui:widget": "select"
        },
        "taskType": {
          "type": "string",
          "description": "What do you need help with?",
          "enum": ["write new code", "debug existing code", "optimize code", "explain concept", "code review"]
        },
        "description": {
          "type": "string",
          "description": "Describe your coding task or problem",
          "ui:widget": "textarea",
          "ui:placeholder": "e.g., I need a function to validate email addresses"
        },
        "code": {
          "type": "string",
          "description": "Existing code (if any)",
          "ui:widget": "textarea",
          "ui:placeholder": "Paste your code here..."
        }
      },
      "required": ["language", "taskType", "description"]
    },
    "outputSchema": {
      "type": "object",
      "properties": {
        "solution": {
          "type": "string",
          "description": "Code solution with explanation"
        },
        "bestPractices": {
          "type": "string",
          "description": "Recommendations and tips"
        },
        "resources": {
          "type": "array",
          "items": { "type": "string" },
          "description": "Additional learning resources"
        }
      }
    }
  }
}
```

---

## Tips for Customizing Examples

### 1. Adjust the System Prompt
The system prompt is the most important customization. Make it specific to your use case.

### 2. Modify Input Fields
Add, remove, or change input fields to match what your agent needs.

### 3. Choose the Right Model
- Use GPT-4o for complex reasoning
- Use GPT-4o-mini for quick, simple tasks
- Use Claude for creative writing

### 4. Set Appropriate Temperature
- Low (0-0.3): Factual, consistent responses
- Medium (0.4-0.8): Balanced creativity
- High (0.9-2.0): Very creative, varied outputs

### 5. Add UI Hints
Use `ui:widget`, `ui:placeholder`, and other hints to improve user experience.

## Next Steps

- [Review Configuration Guide](./configuration-guide) for detailed field explanations
- [Check JSON Schema Reference](./json-schema-reference) for schema options
- [Create Your Agent](https://studio.aisp.app/gpt/new-agent) using these examples
- Share your agent in the [Agents Marketplace](https://studio.aisp.app/gpt/agents-marketplace)

## Need More Examples?

Browse the [Agents Marketplace](https://studio.aisp.app/gpt/agents-marketplace) to see hundreds of live agents and their configurations.
