# Integration Matrix

| Integration | Discovered capability | Current connection | Phase 1 behavior |
|---|---|---|---|
| Canva | Capability discovery, design listing, design creation/export | Not connected | Adapter pending configuration |
| Whop | App discovery/retrieval | Not connected | Listing adapter pending configuration |
| Vercel | Project/deployment/env inspection | Not connected | Deployment verification pending connection |
| GitHub | Repository/code/branch/commit/PR access | Direct repository connector available for this build | Source control available |
| OpenAI | Model discovery/retrieval | Not connected through Composio | Model adapter pending configuration |
| Claude | Provider requested by architecture | No current connected Composio capability surfaced in discovery | Adapter interface reserved; credentials/config required |
| Browser Tool | Browser task creation/watch/session | Active | Research adapter can use public web pages only |

Rules:

1. Discover actual tools before implementation.
2. Inspect full schemas before execution.
3. Verify authentication.
4. Wrap external calls behind adapters.
5. Persist integration failures.
6. Never report an external action as successful unless the provider confirms it.
