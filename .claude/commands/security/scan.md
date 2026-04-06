Run a security vulnerability scan using Trivy.

## Instructions

$ARGUMENTS - Target to scan (directory path, Docker image, or URL). If empty, scan current project.

### Setup Check
First verify trivy is available:
1. Check if `trivy` is in PATH
2. Check if binary exists at `bin/trivy` or `bin/trivy.exe`
3. If not found, provide download instructions:
   - Linux/Mac: `curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh -s -- -b ./bin`
   - Windows: Download from https://github.com/aquasecurity/trivy/releases
   - Or use Docker: `docker run aquasec/trivy`

### Scan Types
Based on the target, run the appropriate scan:

**Filesystem scan** (default - scan a project directory):
```bash
trivy fs --severity HIGH,CRITICAL {target_path}
```

**Docker image scan**:
```bash
trivy image {image_name}
```

**Config scan** (Dockerfiles, Terraform, K8s manifests):
```bash
trivy config {target_path}
```

### Output
- Display results in a clear summary table
- Save detailed report to `output/security-reports/trivy-{date}.txt`
- Highlight CRITICAL and HIGH severity findings
- Suggest remediation for top issues
