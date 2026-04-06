Provide context-sensitive help for the SEO Coding Side Kick workspace.

## Instructions

Determine what the user needs help with based on their current context:

### If working on SEO:
- Point to `/seo/*` commands for content optimization
- Reference seomachine's 26 marketing skills
- Suggest keyword research, meta tag generation, structured data

### If working on design:
- Point to `/design/*` commands for UI/UX auditing
- Reference impeccable's 17 design quality commands
- For dark mode: reference impeccable-dark extensions

### If working on security:
- Point to `/security/scan` for vulnerability scanning with trivy
- Point to `/security/pentest` for penetration testing with hexstrike
- Reference docs/SECURITY_TOOLS.md for detailed usage

### If working on animation:
- Reference repos/animation/GSAP/ for GSAP documentation
- Reference repos/animation/react-gsap-enhancer/ for React integration

### If working on AI/ML:
- Reference repos/google-ai/ for Gemini/Vertex AI samples
- Reference repos/ml/sktime/ for time series analysis

### General help:
- Run `/meta/inventory` to see all available tools
- Run `/meta/agent-select` to browse agent personalities
- Check context/ files for project-specific settings
- Output goes to output/ directory (seo/, security-reports/, design-audits/)
