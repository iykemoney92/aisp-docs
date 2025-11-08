---
sidebar_position: 5
title: Interface Overview
description: Complete guide to the AI Studio Plus interface and navigation
---

# Interface Overview

Learn your way around AI Studio Plus with this comprehensive interface guide.

## Main Interface Layout

The AI Studio Plus interface is organized into four main areas:

```
┌─────────────────────────────────────────────────────────────┐
│  Top Navigation Bar                                          │
├──────────┬──────────────────────────────────────────────────┤
│          │                                                   │
│          │                                                   │
│ Sidebar  │      Main Content Area                           │
│          │                                                   │
│          │                                                   │
│          │                                                   │
├──────────┴──────────────────────────────────────────────────┤
│  Status Bar                                                  │
└─────────────────────────────────────────────────────────────┘
```

## Top Navigation Bar

The sticky navigation bar at the top provides quick access to key functions:

### Left Side

- **Menu Icon** (☰) - Toggle sidebar drawer
- **Logo & Page Title** - Shows current page/feature name
  - AISP branding
  - Contextual page title

### Right Side

- **Credit Balance** - Always visible credit counter
  - Real-time balance updates
  - Click to view credit details and purchase options
  - Shows as formatted number (1000+ displays as "1k")

- **Additional Buttons** (context-dependent)
  - Page-specific action buttons
  - Quick access to relevant features

### Responsive Behavior

- **Desktop (≥1024px)**: Full width with 220px horizontal padding
- **Mobile (below 1024px)**: Full width with 10px padding
- Sticky positioning ensures always visible while scrolling

## Sidebar Navigation

The left sidebar drawer is your main navigation hub (290px wide):

### User Profile Section

At the top of the sidebar:
- **Profile Avatar** - Your profile picture with fallback
- **Display Name** - With power ranking emoji
- **Email Address**
- **Stats Cards** showing:
  - Total chats count
  - Referral tokens earned
  - Additional dynamic metrics

### AI Features Group

**💬 Chat with AI**
- Access AI chat interface
- Start conversations with various models
- FREE for all users

**📖 Prompts Library**
- Pre-made prompt templates
- Organize and save your prompts
- Quick access to effective prompts

**🎨 Generate Image**
- Create AI-generated images
- Multiple AI models available
- 10 credits per generation

**🎬 Generate Video**
- Create AI videos
- Lip sync capabilities
- 50-100 credits per video

**🎵 Generate Sound**
- Create music, sound effects, speech
- 25 credits per generation

### AI Creative Suite

**🖼️ Image Studio**
- Advanced image editing tools
- Upscale, remove background, recolor, and more
- Various operations: 2-8 credits each

**✂️ PromptCut**
- Video editing and optimization
- Trim and edit your video content

### Content Management

**📁 Projects**
- Organize your work
- Create and manage projects
- Tag and categorize content

### Agents Section

**🌐 Store/Marketplace**
- Browse published agents
- Discover community-created AI agents
- Use pre-built automation

**👤 My Agents**
- Your created agents
- Manage and edit your agents
- View usage statistics

**🔧 Publish Agent**
- Share your agents with community
- Set up agent configuration
- Publish to marketplace

**⚡ Executions**
- View agent execution history
- Monitor agent performance
- Check execution status

**📅 Automations**
- Set up automated tasks
- Schedule agent runs
- Manage automation workflows

### Community

**🌐 Discover**
- Explore trending content
- Community highlights
- Featured creations

### Credits & Subscription

**🎁 Daily Check-in**
- Claim daily rewards
- Earn bonus credits
- Build up credit balance

**🛍️ Buy Credits**
- Purchase credit packages
- View pricing options
- Watch ads for free credits

**👑 Subscribe**
- Monthly/Yearly subscription plans
- Unlimited access to features
- Bonus credits included

### Account Section

**👤 Account**
- View credit balance and transactions
- Subscription status
- Financial statistics
- Export transaction history

**✏️ Update Profile**
- Change display name
- Upload profile picture
- Update preferences

**⚙️ Settings**
- Theme (Light/Dark/System)
- Language selection (10 languages)
- Notifications
- Privacy settings
- Performance settings

**❤️ Rate Experience**
- Provide feedback
- Rate the platform
- Help us improve

**📞 Invite Friends**
- Get your referral code
- Earn credits for referrals
- Share with friends

**💬 Support**
- Contact support
- Get help with issues
- Access documentation

**🔓 Log Out**
- Sign out of your account
- Secure logout

## Main Content Area

The largest section where your work happens. All pages use Ionic's IonPage + IonContent structure for mobile compatibility.

### Chat Interface

When in Chat mode (`/gpt/chat`):

**Key Features:**
- **Model Selector Button** - Choose AI model (GPT-4, Claude, Gemini, etc.)
- **Conversation History** - Scrollable message thread
- **Message Input Area** - Type your prompts with:
  - Text input with auto-expansion
  - Attachment options (image, video, audio, file)
  - Send button
- **Use Button** - Quick actions for common tasks
- **Persona Selection** - Choose AI personality/behavior
- **Chat is FREE** - No credit cost for conversations

**Mobile-Optimized:**
- Responsive text area
- Touch-friendly buttons
- Optimized input handling to prevent lag

### Image Generation Interface

When in Art mode (`/gpt/art`):

**Layout:**
- Centered container (max-width: 1200px)
- Decorative header with title
- Model selector for different AI image models
- Generation controls
- Image history grid below

**Key Features:**
- **Prompt Input** - Describe what you want to create
- **Model Selection** - Choose from various image AI models
- **Aspect Ratio Selector** - Square, Portrait, Landscape options
- **Resolution Options** - Different quality levels
- **Generate Button** - Shows credit cost (10 credits per image)
- **Recent Generations Grid** - View your created images
- **Image Actions** - Download, edit, upscale, delete

**Cost:** 10 credits per image generation

### Video Generation Interface

When in Video mode (`/gpt/video`):

**Key Features:**
- Video generation from text prompts
- Model selection for different video AI
- Duration and quality settings
- Video library to view past generations
- Download and share options

**Cost:** 50 credits per video (100 for lip sync)

### Sound Generation Interface

When in Sound mode (`/gpt/sound`):

**Three Generation Types:**
- **Music Generation** - Create background music (25 credits)
- **Sound Effects** - Generate sound effects (25 credits)
- **Speech Generation** - Text-to-speech (25 credits)

**Features:**
- Prompt input for each type
- Duration selection
- Audio player for previews
- Download generated audio
- Audio library

### Image Studio (AI Editor)

Advanced image editing interface with tools:
- **Upscale** (8 credits) - Enhance resolution
- **Remove Background** (2 credits) - Background removal
- **Replace Background** (5 credits) - New background
- **Relight** (6 credits) - Lighting adjustments
- **Recolor** (4 credits) - Color modifications
- **Replace** (5 credits) - Object replacement
- **Erase** (3 credits) - Remove objects
- **Inpaint** (5 credits) - Fill areas
- **Outpaint** (6 credits) - Expand image
- **Text** (7 credits) - Add text
- **Styles** (4 credits) - Apply artistic styles

### PromptCut Editor

Video editing interface for trimming and optimizing video content.

### Projects View

**Features:**
- Grid/List view toggle
- Project cards with tags and metadata
- Create/Edit/Delete project modals
- Empty state for new users
- Search and filter options
- Tagging system for organization

## Modal Components

The interface uses various modal windows for specific actions:

### Settings Modal

Access from sidebar Settings option:

**Available Settings:**
- **General** - Language (10 options), theme, app preferences
- **Notifications** - Push notification settings, FCM token management
- **Privacy** - Privacy preferences and data collection
- **Performance** - Performance optimization settings
- **Updates** - Check and manage app updates

### Credits Modal

Click on credit balance to open:

**Features:**
- Current available credits display
- Feature cost breakdown showing credit cost for each action:
  - Chat: FREE
  - Images: 10 credits
  - Video: 50 credits
  - Sound: 25 credits
  - Various image editing operations: 2-8 credits
- **Subscribe Button** - Navigate to subscription page
- **Buy Credits Button** - Navigate to purchase page
- **Claim Signup Bonus** - If eligible (30 credits)

### Model Selector Modal

Choose AI models for different tasks:
- Multiple model options per feature
- Model capabilities displayed
- Easy switching between models

### Persona Modal

Select AI personalities for chat:
- Pre-configured personas
- Custom persona options
- Behavior and tone settings

### Daily Reward Modal

Claim daily bonuses:
- Daily check-in rewards
- Streak tracking
- Bonus credit opportunities

### File Selection Dialogs

Universal asset selector for:
- Uploading images
- Selecting videos
- Choosing audio files
- File management

## Mobile Interface

The mobile interface is built with Ionic React for native-like mobile experience:

### Navigation Drawer

The sidebar becomes a drawer on mobile:
- Accessible via menu icon (☰) in top navigation
- Slides in from left
- 290px wide drawer
- Backdrop closes drawer when tapped
- Contains all navigation items

### Mobile Optimizations

**Ionic Framework Features:**
- iOS mode for consistent design
- Touch-friendly tap targets
- Safe area insets for notched devices
- StatusBar configuration for Android
- Capacitor integration for native features

**Mobile-Specific:**
- Native camera/photo gallery access for uploads
- Push notifications via Capacitor
- Native file selection dialogs
- Platform-specific UI adjustments

**Gestures:**
- Swipe gestures disabled for stability (can be re-enabled)
- Pull-to-refresh on some pages
- Touch-optimized buttons and inputs

## Responsive Design

The interface adapts to your screen size:

### Desktop (≥ 1024px)
- Navigation with 220px horizontal padding
- Full-width content area
- Drawer sidebar (290px)
- Optimal spacing for desktop use

### Tablet (768px - 1024px)
- Reduced navigation padding (10px)
- Touch-optimized controls
- Collapsible drawer sidebar
- Adaptive font sizes

### Mobile (below 768px)
- Full-width navigation (10px padding)
- Hamburger menu for sidebar
- Compact spacing
- Mobile-optimized inputs
- Bottom padding adjustments
- Smaller font sizes for readability

### Small Height Screens (below 700px)
- Reduced padding and margins
- Compact header sizing
- Optimized for landscape orientation

## Theme System

AI Studio Plus offers a sophisticated theme system:

### Theme Options

Choose your color scheme from Settings:
1. **Light Mode** - Bright, clean interface with light background (#fafdff)
2. **Dark Mode** - Easy on the eyes with dark background (#1c1c1e) and golden tones for text
3. **System Default** - Automatically matches your device preference (iOS/Android system detection)

### Theme Features

**Light Mode:**
- Clean, minimal design
- White/light blue backgrounds
- High contrast for readability
- Professional appearance

**Dark Mode:**
- Dark backgrounds (#1c1c1e)
- Golden text hierarchy for warmth
- Reduced eye strain in low light
- Professional dark interface
- Gradient accents maintained

**Dynamic Theme Detection:**
- iOS: Uses `prefers-color-scheme` media query
- Android: Checks system dark mode setting
- Auto-applies on app load
- Persists across sessions

### Color Scheme

**Primary Colors:**
- Primary Blue: #4c8dff
- Gradient: Purple (#af52de) to Blue (#5e9eff)

**CSS Custom Properties:**
- Extensive use of CSS variables
- Consistent styling across components
- Easy theme switching

## Tips for Efficiency

### 1. Use Projects

Organize work into projects for:
- Better organization
- Faster navigation
- Tag-based categorization
- Clean workspace
- Easy content management

### 2. Leverage Free Features

These features cost no credits:
- **Chat messages** - Always FREE
- Creating and organizing projects
- Building agents (testing uses normal credit costs)
- Browsing marketplace
- Managing your account
- Viewing transaction history

### 3. Take Advantage of Rewards

Maximize your credits:
- Claim **daily check-in rewards**
- Use **referral program** (30 credits per referral)
- Watch ads for **2 credits each**
- Complete **profile setup** for bonuses
- Use your **3-day trial** fully

### 4. Monitor Your Usage

Check your account page regularly:
- View credit transaction history
- Track spending patterns
- Export data to CSV
- Monitor subscription status
- View financial statistics

### 5. Choose Models Wisely

Optimize credit usage:
- Chat is FREE - use it extensively
- Start with lower-cost models for testing
- Use premium models for final output
- Subscribers get free generations (except upscales)

## Technology Stack

AI Studio Plus is built with modern web technologies:

**Frontend Framework:**
- React 19
- TypeScript
- Ionic React (mobile-first UI)
- Capacitor (native mobile features)

**UI Library:**
- Ant Design (component library)
- Custom theming system
- CSS custom properties

**State Management:**
- React Context API
- Local state management
- Firebase real-time listeners

**Backend Services:**
- Firebase Authentication
- Cloud Firestore (database)
- Firebase Storage (files)
- Firebase Cloud Functions
- Firebase Cloud Messaging (FCM)

## Next Steps

Now that you know the interface:

1. **[Understanding Pricing](/getting-started/pricing-credits)** - Learn about credits and subscriptions
2. **[Start Chatting](/tutorials/first-chat)** - Try your first AI conversation (FREE!)
3. **[Generate Images](/tutorials/create-ai-art)** - Create AI art
4. **[Explore Agents](/features/agents/marketplace)** - Browse the agent marketplace

## Need Help?

If you need assistance navigating the interface:
- **Support** - Access from navigation sidebar
- **Settings** - Check Settings for customization options
- **Documentation** - Browse these guides for detailed help

---

*Ready to create? [Open AI Studio Plus](https://studio.aisp.app)*
