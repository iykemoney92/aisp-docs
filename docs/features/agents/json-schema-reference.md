---
sidebar_position: 3
title: JSON Schema Reference
description: Complete reference for agent input and output schemas
---

# JSON Schema Reference

Complete guide to defining input and output schemas for your AI agents using JSON Schema.

## What is JSON Schema?

JSON Schema is a vocabulary that allows you to annotate and validate JSON documents. In AI Studio Plus, schemas define:

- **Input Schema**: What data users provide to your agent
- **Output Schema**: What data your agent returns

## Why Use Schemas?

Schemas provide several benefits:

1. **Validation**: Ensure users provide correct data types
2. **Documentation**: Auto-generate user interfaces
3. **Type Safety**: Catch errors before execution
4. **Better UX**: Create intuitive forms from schema definitions

## Basic Schema Structure

Every schema starts with these fields:

```json
{
  "type": "object",
  "properties": {
    // Your fields go here
  },
  "required": ["field1", "field2"]
}
```

## Data Types

### String

Text data of any length.

```json
{
  "type": "string",
  "description": "User's name",
  "minLength": 1,
  "maxLength": 100
}
```

**Options:**
- `minLength`: Minimum character count
- `maxLength`: Maximum character count
- `pattern`: Regular expression for validation
- `format`: Special string formats (see below)

**String Formats:**

```json
{
  "type": "string",
  "format": "email"  // Valid email address
}
```

Available formats:
- `email` - Email address
- `uri` - Web URL
- `date` - Date (YYYY-MM-DD)
- `date-time` - Date and time (ISO 8601)
- `uuid` - UUID identifier

### Number

Numeric values (integers or decimals).

```json
{
  "type": "number",
  "description": "Age in years",
  "minimum": 0,
  "maximum": 150
}
```

**Options:**
- `minimum`: Minimum value (inclusive)
- `maximum`: Maximum value (inclusive)
- `exclusiveMinimum`: Minimum value (exclusive)
- `exclusiveMaximum`: Maximum value (exclusive)
- `multipleOf`: Number must be multiple of this value

**Integer Only:**

```json
{
  "type": "integer",
  "description": "Number of items",
  "minimum": 1,
  "maximum": 100
}
```

### Boolean

True/false values.

```json
{
  "type": "boolean",
  "description": "Accept terms and conditions",
  "default": false
}
```

### Array

Lists of items.

```json
{
  "type": "array",
  "description": "Selected categories",
  "items": {
    "type": "string"
  },
  "minItems": 1,
  "maxItems": 5,
  "uniqueItems": true
}
```

**Options:**
- `items`: Schema for array items
- `minItems`: Minimum number of items
- `maxItems`: Maximum number of items
- `uniqueItems`: Items must be unique

**Array of Objects:**

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "name": { "type": "string" },
      "quantity": { "type": "number" }
    }
  }
}
```

### Object

Nested objects with properties.

```json
{
  "type": "object",
  "description": "User profile",
  "properties": {
    "firstName": { "type": "string" },
    "lastName": { "type": "string" },
    "age": { "type": "integer" }
  },
  "required": ["firstName", "lastName"]
}
```

## Enums (Dropdown Options)

Restrict values to a predefined list.

```json
{
  "type": "string",
  "description": "Priority level",
  "enum": ["low", "medium", "high", "urgent"],
  "default": "medium"
}
```

**With Labels:**

```json
{
  "type": "string",
  "description": "Difficulty level",
  "enum": ["easy", "medium", "hard"],
  "enumNames": ["Easy (Beginner)", "Medium (Intermediate)", "Hard (Advanced)"]
}
```

## Default Values

Provide default values for optional fields.

```json
{
  "type": "string",
  "description": "Language",
  "default": "English",
  "enum": ["English", "Spanish", "French", "German"]
}
```

## Required Fields

Specify which fields must be provided.

```json
{
  "type": "object",
  "properties": {
    "email": { "type": "string", "format": "email" },
    "name": { "type": "string" },
    "age": { "type": "integer" }
  },
  "required": ["email", "name"]
}
```

## UI Customization

Add UI hints to improve the user experience.

### Widget Types

Control how fields appear in the UI.

**Textarea (Multi-line Text):**

```json
{
  "type": "string",
  "description": "Description",
  "ui:widget": "textarea",
  "ui:placeholder": "Enter a detailed description...",
  "ui:options": {
    "rows": 5
  }
}
```

**Select (Dropdown):**

```json
{
  "type": "string",
  "description": "Category",
  "enum": ["tech", "business", "lifestyle"],
  "ui:widget": "select"
}
```

**Radio Buttons:**

```json
{
  "type": "string",
  "description": "Size",
  "enum": ["small", "medium", "large"],
  "ui:widget": "radio"
}
```

**Checkbox (Boolean):**

```json
{
  "type": "boolean",
  "description": "Subscribe to newsletter",
  "ui:widget": "checkbox"
}
```

**Date Picker:**

```json
{
  "type": "string",
  "format": "date",
  "description": "Birth date",
  "ui:widget": "date"
}
```

**File Upload:**

```json
{
  "type": "string",
  "description": "Profile picture",
  "ui:widget": "file",
  "ui:options": {
    "accept": "image/*"
  }
}
```

**Range Slider:**

```json
{
  "type": "integer",
  "description": "Volume",
  "minimum": 0,
  "maximum": 100,
  "ui:widget": "range"
}
```

### Placeholders

Add placeholder text to guide users.

```json
{
  "type": "string",
  "description": "Email address",
  "ui:placeholder": "you@example.com"
}
```

### Help Text

Provide additional context.

```json
{
  "type": "string",
  "description": "API Key",
  "ui:help": "Find your API key in Settings > Integrations"
}
```

### Field Order

Control the order of fields in the UI.

```json
{
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "email": { "type": "string" },
    "phone": { "type": "string" }
  },
  "ui:order": ["name", "email", "phone"]
}
```

## Conditional Fields

Show fields based on other field values.

```json
{
  "type": "object",
  "properties": {
    "hasAccount": {
      "type": "boolean",
      "description": "Do you have an account?"
    },
    "username": {
      "type": "string",
      "description": "Username"
    },
    "password": {
      "type": "string",
      "description": "Password",
      "ui:widget": "password"
    }
  },
  "dependencies": {
    "hasAccount": {
      "oneOf": [
        {
          "properties": {
            "hasAccount": { "const": true },
            "username": { "type": "string" },
            "password": { "type": "string" }
          },
          "required": ["username", "password"]
        },
        {
          "properties": {
            "hasAccount": { "const": false }
          }
        }
      ]
    }
  }
}
```

## Validation

### Pattern Matching

Use regular expressions for validation.

```json
{
  "type": "string",
  "description": "Phone number",
  "pattern": "^\\+?[1-9]\\d{1,14}$",
  "ui:placeholder": "+1234567890"
}
```

Common patterns:

**Email:**
```json
{
  "type": "string",
  "format": "email"
}
```

**URL:**
```json
{
  "type": "string",
  "format": "uri"
}
```

**Hex Color:**
```json
{
  "type": "string",
  "pattern": "^#[0-9A-Fa-f]{6}$",
  "ui:placeholder": "#FF5733"
}
```

**Alphanumeric:**
```json
{
  "type": "string",
  "pattern": "^[a-zA-Z0-9]+$"
}
```

### Custom Error Messages

Provide helpful error messages.

```json
{
  "type": "string",
  "description": "Username",
  "pattern": "^[a-zA-Z0-9_]{3,20}$",
  "errorMessage": {
    "pattern": "Username must be 3-20 characters and contain only letters, numbers, and underscores"
  }
}
```

## Complete Examples

### Contact Form

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Full Name",
      "minLength": 2,
      "ui:placeholder": "John Doe"
    },
    "email": {
      "type": "string",
      "format": "email",
      "description": "Email Address",
      "ui:placeholder": "john@example.com"
    },
    "phone": {
      "type": "string",
      "description": "Phone Number",
      "pattern": "^\\+?[1-9]\\d{1,14}$",
      "ui:placeholder": "+1234567890"
    },
    "subject": {
      "type": "string",
      "description": "Subject",
      "enum": ["General Inquiry", "Support", "Feedback", "Other"],
      "ui:widget": "select"
    },
    "message": {
      "type": "string",
      "description": "Message",
      "minLength": 10,
      "ui:widget": "textarea",
      "ui:placeholder": "How can we help you?",
      "ui:options": {
        "rows": 5
      }
    },
    "priority": {
      "type": "string",
      "description": "Priority",
      "enum": ["low", "medium", "high"],
      "default": "medium",
      "ui:widget": "radio"
    }
  },
  "required": ["name", "email", "subject", "message"]
}
```

### User Registration

```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Username",
      "pattern": "^[a-zA-Z0-9_]{3,20}$",
      "ui:placeholder": "johndoe123"
    },
    "email": {
      "type": "string",
      "format": "email",
      "description": "Email"
    },
    "password": {
      "type": "string",
      "description": "Password",
      "minLength": 8,
      "ui:widget": "password",
      "ui:help": "Must be at least 8 characters"
    },
    "confirmPassword": {
      "type": "string",
      "description": "Confirm Password",
      "ui:widget": "password"
    },
    "birthDate": {
      "type": "string",
      "format": "date",
      "description": "Birth Date",
      "ui:widget": "date"
    },
    "interests": {
      "type": "array",
      "description": "Interests",
      "items": {
        "type": "string",
        "enum": ["tech", "sports", "music", "travel", "food", "art"]
      },
      "uniqueItems": true,
      "ui:widget": "checkboxes"
    },
    "terms": {
      "type": "boolean",
      "description": "I agree to the terms and conditions",
      "const": true
    }
  },
  "required": ["username", "email", "password", "confirmPassword", "terms"]
}
```

### Product Review

```json
{
  "type": "object",
  "properties": {
    "rating": {
      "type": "integer",
      "description": "Overall Rating",
      "minimum": 1,
      "maximum": 5,
      "ui:widget": "range"
    },
    "title": {
      "type": "string",
      "description": "Review Title",
      "maxLength": 100,
      "ui:placeholder": "Sum up your experience"
    },
    "review": {
      "type": "string",
      "description": "Your Review",
      "minLength": 50,
      "maxLength": 1000,
      "ui:widget": "textarea",
      "ui:options": {
        "rows": 6
      }
    },
    "pros": {
      "type": "array",
      "description": "Pros",
      "items": { "type": "string" },
      "minItems": 1,
      "ui:options": {
        "orderable": false
      }
    },
    "cons": {
      "type": "array",
      "description": "Cons",
      "items": { "type": "string" },
      "ui:options": {
        "orderable": false
      }
    },
    "wouldRecommend": {
      "type": "boolean",
      "description": "Would you recommend this product?",
      "default": true
    },
    "photos": {
      "type": "array",
      "description": "Photos (optional)",
      "items": {
        "type": "string",
        "ui:widget": "file",
        "ui:options": {
          "accept": "image/*"
        }
      },
      "maxItems": 5
    }
  },
  "required": ["rating", "title", "review", "wouldRecommend"]
}
```

## Best Practices

### 1. Use Descriptive Field Names

Good:
```json
"userEmailAddress": { "type": "string", "format": "email" }
```

Bad:
```json
"field1": { "type": "string" }
```

### 2. Always Include Descriptions

Descriptions help users understand what to enter.

```json
{
  "type": "string",
  "description": "Enter your company's website URL",
  "format": "uri"
}
```

### 3. Set Appropriate Constraints

Use `minLength`, `maxLength`, `minimum`, `maximum` to guide users.

```json
{
  "type": "string",
  "description": "Bio",
  "minLength": 10,
  "maxLength": 500,
  "ui:widget": "textarea"
}
```

### 4. Provide Defaults When Possible

Make forms easier to fill out.

```json
{
  "type": "string",
  "description": "Country",
  "default": "United States",
  "enum": ["United States", "Canada", "United Kingdom", ...]
}
```

### 5. Use Appropriate Widgets

Match the widget to the data type and expected input.

```json
{
  "type": "boolean",
  "description": "Enable notifications",
  "ui:widget": "checkbox"  // Not "text"
}
```

### 6. Group Related Fields

Use nested objects for related fields.

```json
{
  "type": "object",
  "properties": {
    "personalInfo": {
      "type": "object",
      "properties": {
        "firstName": { "type": "string" },
        "lastName": { "type": "string" }
      }
    },
    "contactInfo": {
      "type": "object",
      "properties": {
        "email": { "type": "string", "format": "email" },
        "phone": { "type": "string" }
      }
    }
  }
}
```

## Common Patterns

### Email with Confirmation

```json
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "format": "email",
      "description": "Email Address"
    },
    "emailConfirm": {
      "type": "string",
      "format": "email",
      "description": "Confirm Email"
    }
  },
  "required": ["email", "emailConfirm"]
}
```

### Multi-step Selection

```json
{
  "type": "object",
  "properties": {
    "category": {
      "type": "string",
      "enum": ["electronics", "clothing", "books"],
      "ui:widget": "select"
    },
    "subcategory": {
      "type": "string",
      "ui:widget": "select",
      "ui:options": {
        "dependsOn": "category"
      }
    }
  }
}
```

### File Upload with Restrictions

```json
{
  "type": "string",
  "description": "Upload Resume",
  "ui:widget": "file",
  "ui:options": {
    "accept": ".pdf,.doc,.docx",
    "maxSize": 5242880
  }
}
```

## Validation & Testing

### Test Your Schema

Before publishing, test your schema with various inputs:

1. Valid inputs
2. Invalid inputs (wrong type)
3. Missing required fields
4. Edge cases (empty strings, large numbers)
5. Boundary values (min/max limits)

### Schema Validation Tools

Use these tools to validate your JSON Schema:

- [JSON Schema Validator](https://www.jsonschemavalidator.net/)
- AI Studio Plus built-in validator (in the agent creation flow)

## Resources

- [JSON Schema Official Docs](https://json-schema.org/)
- [Understanding JSON Schema](https://json-schema.org/understanding-json-schema/)
- [Configuration Guide](./configuration-guide) - Learn about agent configuration
- [Example Configurations](./example-configurations) - See real-world examples

## Need Help?

- Join our [Discord Community](https://discord.gg/aisp)
- Check [Common Issues](/troubleshooting/agents)
- Contact support at support@aisp.app
