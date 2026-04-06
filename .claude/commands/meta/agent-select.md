Browse and activate an AI agent personality from the agency-agents collection.

## Instructions

1. Read the docs/AGENT_INDEX.md file to get the full list of available agents.

2. If the user specified an agent name or category, filter to matching agents.
   If not, present agents grouped by category:
   - Engineering agents (software, DevOps, architecture)
   - Design agents (UI/UX, accessibility, visual)
   - Marketing agents (SEO, content, social media)
   - Research agents (analysis, data, strategy)
   - Other specialized agents

3. When the user selects an agent, read its definition file from:
   repos/knowledge/agency-agents/{agent-name}/

4. Load the agent's personality, expertise, communication style, and constraints.

5. Confirm activation: "Now operating as {agent-name}. {one-line description}"

6. Apply the agent's persona to subsequent responses until the user deactivates it
   or selects a different agent.

## Usage
- `/meta/agent-select` - Browse all agents
- `/meta/agent-select marketing` - Browse marketing agents
- `/meta/agent-select {name}` - Activate specific agent
