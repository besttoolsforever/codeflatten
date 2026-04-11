window.translations = window.translations || {};
window.translations.en = {
    shared: {
        nav: { home: "Home", support: "Support", legal: "Legal", step5: "Step 5" },
        footer: {
            description: "Precision-crafted software for real-world use.",
            social: { github: "GitHub", linkedin: "LinkedIn" },
            privacy: "Privacy Policy",
            terms: "Terms of Service",
            copyright_prefix: "©",
            copyright_suffix: "BestToolsForever."
        }
    },
    home: {
        title: "BestToolsForever | Precision Utility Software",
        hero: {
            label: "Precision Software",
            title: "Accelerate your Vibe Coding workflow.",
            subtitle: "The ultimate local-first utility for modern builders. Transforming complex codebases into structured, AI-ready context in seconds.",
            cta: "Get CodeFlatten PRO"
        },
        studio: {
            label: "INDIE SOFTWARE STUDIO",
            title: "Crafting Digital <br/> <span class=\"text-secondary\">Permanence.</span>",
            subtitle: "An independent software studio led by Luiz E. L. Junior. We build tools that prioritize utility, precision, and the editorial feel of high-end software.",
            lead_dev: "Lead Developer",
            btn_windows: "Windows v1.0",
            btn_store: "Install via Microsoft Store",
            flagship: "Flagship Product",
            flagship_desc: "The definitive Windows utility for developers. Efficiently organize, weave, and export complex projects for AI context ingestion."
        },
        vibe: {
            title: "Built for Vibe Coding",
            desc: "Don't waste time copy-pasting. CodeFlatten PRO prepares your entire environment for LLMs, ensuring perfect structural context and token efficiency.",
            feature1: "Context-Aware Bundling",
            feature2: "Token Optimization",
            feature3: "Instant AI Prompting",
            llm_ready_title: "LLM-Ready Context",
            llm_ready_desc: "Bundle your code for Claude, ChatGPT, or Gemini in one click."
        },
        security: {
            title: "Privacy by Design",
            desc: "100% Local-First. Your proprietary code never leaves your machine unless you send it. No cloud processing, no data logging.",
            badge: "Native Windows Performance"
        },
        integration: {
            title: "Seamless OS Integration",
            desc: "CodeFlatten PRO integrates directly into the Windows Shell. Right-click any folder or file selection to generate your bundle instantly.",
            feature1: "Context Menu Ready",
            feature2: "Background Processing",
            feature3: "Selection Bundling"
        },
        redactor: {
            title: "Intelligent Redaction",
            desc: "Security isn't a suggestion, it's a feature. Protect API keys, credentials, and proprietary logic with our rules-based Content Redactor before sharing with AI.",
            badge: "AI-Safe Exports"
        },
        profiles: {
            title: "Automation at Scale",
            desc: "Save your favorite configurations as Profiles. Use Directory-Based Overrides to automatically apply the right rules to specific projects.",
            feature1: "Custom Configuration",
            feature2: "Directory Overrides",
            feature3: "Meta-Headers"
        },
        features: {
            title: "Core Capabilities",
            codeflatten: {
                name: "CodeFlatten PRO",
                desc: "The professional-grade utility for project documentation, AI context preparation, and large-scale text transformation. Optimized for efficiency on Windows."
            },
            workflow: {
                title: "Engineered for Efficiency",
                step1: { title: "Define Structure", desc: "Build folder trees and headers manually or use automated presets." },
                step2: { title: "Secure Content", desc: "Apply rules-based redaction to protect sensitive data before export." },
                step3: { title: "Export & Build", desc: "Generate AI-ready bundles via GUI or the Windows Explorer context menu." }
            },
            learn_more: "Learn More"
        },
        comparison: {
            title: "Free vs. Premium",
            free: "2 Profiles, 1 Redaction Rule, 1 Directory Override",
            premium: "Unlimited Profiles, Advanced Redaction, Priority Overrides, Store-Synced Licenses",
            cta: "Get CodeFlatten PRO"
        },
    },
    step5: {
        title: "Step 5 — Exclusions & Safety | CodeFlatten PRO",
        hero: {
            badge: "Official Wizard Guide",
            title: "Step 5 — Exclusions & Safety",
            subtitle: "Learn how to build reliable filters, reduce bundle noise, and avoid oversized or dangerous exports without losing project control.",
            cta1: "See practical rules",
            cta2: "Understand Safety Scan"
        },
        quick: {
            title: "Quick summary",
            item1: "Each skip-list line is tested against the item name and also against the full path string.",
            item2: "If a folder matches a rule, that entire branch stops being scanned.",
            item3: "Skipped items can show up as placeholders in the tree or remain completely hidden.",
            item4: "Safety Scan limits depth, file count, and total size. Path Guard blocks roots and critical folders."
        },
        engine: {
            card1: { title: "1. What can match", body: "The engine uses fnmatch-style patterns. A rule can match the file or folder name, or the full path string." },
            card2: { title: "2. What happens next", body: "If a rule hits a folder, CodeFlatten PRO stops scanning that node. Everything inside it is implicitly ignored." },
            card3: { title: "3. What enters the bundle", body: "Eligible text files enter the bundle. Binary and unsupported formats can still appear as reference entries if that option is enabled." }
        },
        rules: {
            title: "Practical rules for daily use: Broad fnmatch support.",
            subtitle: "Use exact names for surgical exclusions. Use wildcards for file types, recurring patterns, or broader filters.",
            jump: "See visual example",
            exact: { title: "Direct exclusion by name", body: "When you want to remove a specific folder or file from the bundle, prefer the exact node name.", when: "Use this when your intention is to block an entire folder wherever it appears in the tree, without depending on slashes or full paths." },
            wild: { title: "Wildcards for extensions and file families", body: "When the target is a recurring pattern, use simple wildcards. They are ideal for tests, locks, images, build artifacts, and recurring secrets.", ex1: "Ignore all log files.", ex2: "Ignore multiple test-file variants.", ex3: "Avoid embedding binary images into the bundle.", ex4: "Help block keys and sensitive files." },
            broad: { title: "Broad and flexible patterns", body: "Patterns such as *cache* or **cache** behave like broad substring filters. They are useful when you want to catch multiple variations, but they can exclude more content than expected.", tip: "Use this style when your goal is reach, not precision. To exclude one specific folder, keep preferring the exact name." },
            thumb1: "Need to block one specific folder? Use an <strong>exact name</strong>.",
            thumb2: "Need to block a family of files? Use <strong>extension wildcards</strong>.",
            thumb3: "Need to catch any occurrence of a term? Use a <strong>broad pattern</strong> carefully."
        },
        demo: {
            title: "Visual example",
            subtitle: "Below is a generic project before filtering and the rules applied in Step 5.",
            reading: "Engine interpretation",
            reading_body: "The <span class=\"code-chip\">ui</span> folder is removed as a whole branch; <span class=\"code-chip\">logo.png</span> and <span class=\"code-chip\">app.test.ts</span> are filtered by pattern; <span class=\"code-chip\">.env</span> is removed by exact name.",
            before: "Before",
            after: "After",
            note: "If ignored visibility is set to “Hide completely”, the placeholders above disappear from the tree."
        },
        safety: {
            title: "Safety Scan and Path Guard",
            subtitle: "Step 5 is not only about excluding noise. It also protects against exports that are accidentally too large, too deep, or too dangerous.",
            h3_files: "Max Files",
            h3_size: "Max Size (MB)",
            h3_depth: "Max Dir Depth",
            h3_guard: "Path Guard",
            files: "Stops the operation when the number of eligible text files exceeds the configured limit.",
            size: "Prevents gigantic bundles when the accumulated content size goes beyond the configured ceiling.",
            depth: "Helps prevent overly deep trees, loops, or accidentally huge structures.",
            guard: "Blocks disk roots and critical directories by default, such as <span class=\"code-chip\">C:\\</span> and <span class=\"code-chip\">C:\\Windows</span>.",
            trigger: { title: "When a limit is triggered", body: "The export is safely aborted. Instead of generating an incomplete or overly costly bundle, the system writes a small file explaining the reason." }
        },
        ai: {
            badge: "Optional recommendation",
            title: "Optional AI assistance to modularize the project",
            body: "For large or heterogeneous projects, you can use a repository tree snapshot with an LLM of your choice to generate a first draft of Step 5 rules. This helps with modularization and noise reduction, but it does not replace sanitizing the final content.",
            note: "This workflow is assisted and reviewable. The goal is not to replace technical judgment, but to accelerate the creation of an initial skip list that can then be refined directly in CodeFlatten PRO. Credentials, secrets, and sensitive content inside included files must be handled separately with the Content Redactor.",
            guard: { title: "Important: filtering is not redaction", body: "Step 5 helps decide what does or does not enter the bundle. Sanitizing the final text belongs to Step 6, through the Content Redactor. Use both together when you need modularization, noise reduction, and review of sensitive content." },
            when: { label: "When it is worth using", 1: "Monorepos, hybrid stacks, or codebases with many auxiliary directories.", 2: "When you want to modularize dumps by purpose: architecture, runtime, UI, integrations, or documentation.", 3: "When manual filtering would be repetitive, slow, or too broad." },
            flow: { title: "Suggested workflow", 1: "Generate a tree snapshot and define the dump objective.", 2: "Ask the LLM only for an initial skip list that preserves the core and reduces noise.", 3: "Review the rules, adapt them to the project, and only then apply them in Step 5." },
            prompt: { label: "Example request", body: "Analyze the repository snapshot in the user's language and generate only an optimized skip list in fnmatch pattern, ready for use, excluding noise without damaging the architecture: use exact names to remove specific folders or files, wildcards for recurring file families, and broad patterns with caution; consider that each rule can match both the item name and the full path, and that if a folder matches, the entire branch should be ignored. Remove tests, non-essential docs, binary assets, caches, logs, builds, locks, temporary artifacts, secrets, and redundancies, but preserve the functional core, modules, runtime, providers, adapters, execution flow, and everything that supports structural understanding of the system.\n\nWhen in doubt, preserve relevant code and exclude only noise.\n\nPrioritize patterns such as:\n*test*\n*tests*\n*docs*\n*example*\n*examples*\n*bench*\n*benchmark*\n*fixture*\n*fixtures*\n*mock*\n*mocks*\n*__pycache__*\n*node_modules*\n*.log\n*.lock\n*.tmp\n*.cache\ndist*\nbuild*\ntarget*\ncoverage*", note: "Use the answer as a starting point. The ideal result is reviewable, compact, and aligned with the specific dump objective — never as a substitute for human review or the Content Redactor." }
        },
        ack: {
            title: "Acknowledgements & Third-Party",
            body: "CodeFlatten PRO features a GitHub Linguist-style statistical output, inspired by the open-source <a href=\"https://github.com/github-linguist/linguist\" target=\"_blank\" class=\"font-bold text-white hover:underline transition-colors\">Linguist</a> project by GitHub. The underlying engine also leverages the capabilities of Python, Tcl/Tk, and Pillow."
        },
        check: {
            title: "Quick checklist before exporting",
            item1: "Use exact names for surgical exclusions.",
            item2: "Use wildcards for extensions, tests, locks, and recurring artifacts.",
            item3: "Keep Safety Scan enabled in most cases.",
            item4: "Keep Path Guard enabled to avoid roots and critical folders.",
            item5: "Enable binary references when you want structural context without embedding the content itself.",
            item6: "Review the final output before sharing it with third parties or with an AI."
        },
        support: {
            label: "Need help?",
            title: "Technical support",
            body: "If something is unclear, send a short report with screenshots and the observed behavior. That speeds diagnosis up a lot."
        },
        labels: {
            recommended: "Recommended",
            why: "When to use it",
            rule_of_thumb: "Rule of thumb",
            reading: "Engine reading",
            before: "Before",
            after: "After",
            when_worth: "When it is worth using",
            prompt_label: "Example request"
        }
    },
    support: {
        title: "Support - CodeFlatten PRO | BestToolsForever",
        hero: {
            label: "Technical Support",
            title: "CodeFlatten PRO Help Center.",
            subtitle: "Dedicated assistance for our high-performance utility suite. Get back to building with precision.",
            back_to_home: "Back to Home"
        },
        faq: {
            title: "Knowledge Base & Troubleshooting",
            item1: {
                q: "Dealing with unexpected app behavior or UI glitches?",
                a: "A clean re-installation of the Microsoft Store package usually resolves local cache parity and update synchronization issues."
            },
            item2: {
                q: "What are the benefits of the Premium Unlock?",
                a: "The Premium version removes limitations on the number of profiles, allows advanced multi-rule content redaction, and enables directory-based profile overrides."
            },
            item3: {
                q: "How are licenses managed?",
                a: "All licensing is securely managed via the Microsoft Store. Your purchase is linked to your account and automatically synced across your compatible Windows devices."
            }
        },
        report: {
            title: "Report an Issue",
            description: "Our engineering team investigates every report. To expedite your request:",
            item1: "Please include a screenshot of the error.",
            item2: "Provide your Windows build.",
            item3: "Give a detailed description of the problem.",
            contact_label: "Contact Channel"
        }
    },
    legal: {
        title: "Legal Information | BestToolsForever",
        hero: {
            title: "Legal & Privacy",
            subtitle: "Our terms, agreements, and commitment to your data privacy."
        },
        eula: {
            title: "End User License Agreement (EULA)",
            content: `
CODEFLATTEN PRO
END USER LICENSE AGREEMENT (EULA)
Version 1.1  
Last Updated: March 21, 2026

IMPORTANT NOTICE  
PLEASE READ THIS END USER LICENSE AGREEMENT ("AGREEMENT") CAREFULLY BEFORE INSTALLING, ACCESSING, OR USING CODEFLATTEN PRO (THE "SOFTWARE"). BY INSTALLING, ACCESSING, OR USING THE SOFTWARE, YOU AGREE TO BE BOUND BY THIS AGREEMENT. IF YOU DO NOT AGREE, DO NOT INSTALL, ACCESS, OR USE THE SOFTWARE.

THIS AGREEMENT APPLIES TO THE BASE APPLICATION, ANY INCLUDED COMPONENTS, ANY UPDATES OR SUPPLEMENTS PROVIDED BY THE DEVELOPER UNLESS THEY COME WITH SEPARATE TERMS, AND ANY PREMIUM FEATURES MADE AVAILABLE THROUGH THE MICROSOFT STORE, INCLUDING ANY DURABLE ADD-ON IDENTIFIED BY THE DEVELOPER AS A PREMIUM UNLOCK.

1. PARTIES
This Agreement is entered into between you ("User," "you," or "your") and Luiz E. L. Junior, doing business as BestToolsForever ("Developer," "we," "us," or "our").

2. SOFTWARE DESCRIPTION
CodeFlatten PRO is a Windows software application designed to help users organize, filter, transform, review, and export project and text-based materials into structured output for documentation, review, and AI-related workflows.

The Software is designed to operate primarily on the local device. It may process files, folders, paths, rules, preferences, prompts, and other inputs selected or configured by the User, and it may generate outputs, manifests, diagnostics, reports, logs, and related artifacts based on those inputs and configurations.

3. COMMERCIAL MODEL
3.1 Base Application
The base application may be made available free of charge.

3.2 Premium Features
Certain features may be restricted to users who hold a valid premium entitlement obtained through the Microsoft Store, including, where applicable, a durable add-on identified by the Developer as a premium unlock.

3.3 Microsoft Store Entitlement
Availability of Premium Features depends on Microsoft Store entitlement status associated with the User's account, device, package, and licensing context. The Developer does not guarantee uninterrupted entitlement synchronization, and the Software may require refresh, reauthentication, reconnection, or relaunch in order to reflect updated entitlement status.

3.4 Store-Controlled Matters
Purchases, billing, taxation, cancellations, refunds, regional availability, account issues, and other Store-controlled matters for Premium Features are governed by the Microsoft Store and its applicable terms, systems, and policies, not by the Developer directly, except to the extent applicable law requires otherwise.

4. LICENSE GRANT
Subject to your compliance with this Agreement and with applicable platform rules, the Developer grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to install and use the Software solely for your own personal use or internal business use on compatible Windows devices.

The Software is licensed, not sold. No ownership rights are transferred to you. All rights not expressly granted are reserved by the Developer or its licensors.

5. OWNERSHIP AND INTELLECTUAL PROPERTY
The Software, including its source code, object code, structure, architecture, selection, arrangement, interface, design, branding, documentation, and related materials, is owned by the Developer or its licensors and is protected by applicable intellectual property and unfair competition laws.

Except for the limited license expressly granted in this Agreement, no right, title, or interest in or to the Software is granted to you.

6. LICENSE RESTRICTIONS
Except to the extent expressly permitted by applicable law notwithstanding this limitation, you may not:

a. reverse engineer, decompile, disassemble, or attempt to derive source code from the Software;  

b. modify, adapt, translate, or create derivative works of the Software;  

c. bypass, disable, defeat, or interfere with licensing, entitlement, packaging, security, access-control, or feature-gating mechanisms;  

d. rent, lease, lend, sublicense, sell, distribute, assign, commercially host, or otherwise make the Software available to third parties except as expressly authorized by the Developer in writing;  

e. use the Software in a manner that violates law, third-party rights, contractual obligations, confidentiality duties, or data protection obligations;  

f. use the Software to access, process, transform, disclose, or export content you do not have the right to handle; or  

g. remove, alter, or obscure proprietary notices, copyright notices, branding, or license markings.

7. USER CONTENT, USER DECISIONS, AND OUTPUT RESPONSIBILITY
7.1 User-Controlled Inputs
You are solely responsible for the files, folders, paths, prompts, content, settings, rules, profiles, destinations, credentials, and other inputs selected, connected, or configured through the Software.

7.2 Output Review
You are solely responsible for reviewing and validating all output generated, transformed, assembled, filtered, or assisted by the Software before using, sharing, publishing, uploading, transmitting, or relying on it.

7.3 No Guarantee of Complete Redaction or Safety
Features such as filters, exclusions, profile rules, scans, pattern controls, preview mechanisms, diagnostics, and other protections may reduce risk, but they do not guarantee complete removal of sensitive, confidential, proprietary, regulated, personal, or otherwise protected information.

7.4 Independent Judgment Required
You must independently verify that any output or disclosure is appropriate for your intended purpose, recipient, environment, and legal obligations.

8. THIRD-PARTY SERVICES, AI PLATFORMS, AND EXTERNAL DESTINATIONS
8.1 Optional Third-Party Use
You may choose to use the Software together with third-party services or destinations, including AI or LLM platforms, cloud services, repositories, external viewers, editors, storage providers, or collaboration tools.

8.2 No Control Over Third Parties
The Developer does not control and is not responsible for the availability, privacy practices, confidentiality, security, retention, training practices, logging, moderation, pricing, terms, performance, or behavior of any third-party service.

8.3 No Compatibility Guarantee
Compatibility with any third-party service may change at any time and is not guaranteed.

8.4 Third-Party Disclosure Risk
If you upload, paste, transmit, synchronize, export, or otherwise disclose content or output to any third party, you do so at your own risk and remain solely responsible for evaluating whether that disclosure is lawful, authorized, and appropriate.

9. PRIVACY, DATA HANDLING, CONSENT, AND SECURITY
9.1 Separate Privacy Policy
Use of the Software is also subject, where applicable, to the Developer's then-current Privacy Policy made available through the Microsoft Store listing, the Developer's support or legal pages, and/or within the Software where applicable.

The Privacy Policy is intended to describe, as applicable, the categories of personal information or personal data accessed, collected, stored, secured, transmitted, disclosed, or otherwise processed in connection with the Software; the purposes for such processing; relevant retention practices; user controls; available rights and request channels; and the categories of parties to whom such data may be disclosed.

To the extent a matter specifically concerns privacy, data protection, or personal data handling, the Privacy Policy will control over this Agreement in the event of a direct conflict, except where mandatory law requires a different result.

9.2 Local-First Design
The Software is designed to operate primarily on the local device. However, some product, platform, Store, licensing, update, crash, reliability, analytics, or support-related functions may involve Microsoft systems and, where implemented by the Developer, may involve Developer-controlled or third-party systems as described in the applicable Privacy Policy or in-product disclosures.

9.3 Microsoft Platform Services
Distribution, entitlement checks, Store transactions, package identity, platform diagnostics, crash handling, and related platform services may be provided in whole or in part by Microsoft and remain subject to Microsoft's applicable terms, notices, and privacy documentation.

9.4 Consent and Optional Sharing
Where the Software enables you to send, publish, or disclose personal information or other content to an outside service or third party, you are responsible for ensuring you have a lawful basis and any permissions or consents required for that disclosure.

Where applicable law or the Software's design requires express consent before a specific data-sharing action occurs, the Software, its related user interface, or the relevant workflow notice will seek that consent before the action is performed and will provide a means to withdraw or change the setting where legally required.

9.5 Security
To the extent the Software accesses, collects, stores, or transmits personal information under the Developer's control, the Developer intends to use reasonable administrative, technical, and organizational safeguards appropriate to the nature of the data and the reasonably foreseeable risks, recognizing that no method of storage, transmission, or processing is completely secure.

9.6 Rights and Requests
Questions, requests, or complaints relating to privacy, personal data, or data protection may be directed to the contact information identified in the then-current Privacy Policy or in Section 25 of this Agreement. Available rights and request procedures depend on applicable law and the Developer's role in the relevant processing activity.

9.7 Children
The Software is not directed to children for whom verifiable parental consent would be required under applicable law. You are responsible for ensuring that your use of the Software complies with laws relating to children or minors where relevant.

10. BACKUPS, DATA LOSS, AND FILE SAFETY
10.1 Backup Responsibility
You are solely responsible for maintaining adequate backups of your files, folders, projects, prompts, settings, profiles, exports, reports, logs, and related data before and during use of the Software.

10.2 Risk of Data Loss
Software that reads, transforms, exports, filters, renames, reorganizes, or writes files can fail or behave unexpectedly. Subject to Sections 16, 17, and 21, the Developer does not guarantee that use of the Software will be free from deletion, corruption, overwrite, rename errors, malformed output, broken references, path mistakes, or other forms of data loss or data degradation.

11. PREMIUM FEATURES AND ENTITLEMENT LIMITATIONS
11.1 Feature Availability
Premium Features may be unavailable if:

a. the relevant Microsoft Store entitlement is absent, inactive, delayed, revoked, or cannot be verified;  

b. the app is running in unpackaged, side-loaded, development, test, or unsupported licensing modes;  

c. Microsoft Store or related platform services are unavailable, delayed, blocked, or malfunctioning;  

d. the account, region, package, device, or licensing context does not support the requested feature; or  

e. the relevant feature has been modified, replaced, suspended, or discontinued.

11.2 No Manual Key Obligation
Unless expressly stated otherwise by the Developer in writing, the official licensing model for Premium Features is Microsoft Store-managed entitlement. Manual key delivery, key custody, offline activation, or alternative entitlement models are not part of the official model.

12. SUPPORT AND MAINTENANCE
Unless expressly stated by the Developer in writing or required by applicable law, the Developer has no obligation to provide support, maintenance, updates, bug fixes, feature enhancements, compatibility updates, migration assistance, or continued availability of the Software or any Premium Features.

Any support, responses, fixes, or updates provided by the Developer are voluntary unless separately agreed in writing.

Microsoft, your hardware manufacturer, and your device distributor are not responsible for providing support for the Software unless one of them is the application publisher.

13. UPDATES, CHANGES, AND AVAILABILITY
The Developer may, at any time and to the extent permitted by law, modify, suspend, discontinue, replace, patch, or update any part of the Software, Premium Features, packaging, compatibility behavior, entitlement behavior, documentation, or related materials.

Nothing in this Agreement guarantees that any feature, workflow, integration, interface, or compatibility path will remain available indefinitely.

14. NO HIGH-RISK USE
The Software is not designed, certified, or intended for use in safety-critical, mission-critical, medical, emergency, legal-compliance, financial-compliance, export-control, or other high-risk environments where an error, omission, delay, malfunction, or unintended disclosure could reasonably be expected to cause personal injury, unlawful conduct, regulatory exposure, property damage, or significant business harm.

You agree not to use the Software in such contexts.

15. DISCLAIMER OF WARRANTIES
TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SOFTWARE IS PROVIDED "AS IS," "AS AVAILABLE," AND "WITH ALL FAULTS."

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE DEVELOPER, ON BEHALF OF ITSELF AND ITS LICENSORS, DISCLAIMS ALL EXPRESS, IMPLIED, STATUTORY, AND OTHER WARRANTIES, CONDITIONS, AND REPRESENTATIONS, INCLUDING ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, QUIET ENJOYMENT, ACCURACY, RELIABILITY, SECURITY, ERROR-FREE OPERATION, UNINTERRUPTED AVAILABILITY, OR THAT ANY OUTPUT WILL BE COMPLETE, CORRECT, SAFE, COMPLIANT, OR FIT FOR DISCLOSURE TO ANY THIRD PARTY.

YOU MAY HAVE ADDITIONAL RIGHTS UNDER THE LAWS OF YOUR COUNTRY, STATE, OR PROVINCE, AND THIS AGREEMENT DOES NOT CHANGE THOSE RIGHTS WHERE APPLICABLE LAW DOES NOT PERMIT IT TO DO SO.

16. LIMITATION OF LIABILITY
TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE DEVELOPER AND ITS LICENSORS, AFFILIATES, CONTRACTORS, OFFICERS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF DATA, FILES, CONTENT, PROJECTS, REVENUE, PROFITS, GOODWILL, BUSINESS OPPORTUNITY, OR BUSINESS INTERRUPTION ARISING OUT OF OR RELATED TO THE SOFTWARE OR THIS AGREEMENT, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE TOTAL AGGREGATE LIABILITY OF THE DEVELOPER FOR CLAIMS ARISING OUT OF OR RELATING TO THE SOFTWARE OR THIS AGREEMENT WILL NOT EXCEED THE GREATER OF: (A) THE AMOUNT YOU PAID FOR THE SOFTWARE OR THE RELEVANT PREMIUM UNLOCK DURING THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM; OR (B) TEN UNITED STATES DOLLARS (US $10.00).

NOTHING IN THIS AGREEMENT EXCLUDES OR LIMITS LIABILITY TO THE EXTENT SUCH LIABILITY CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW, INCLUDING NON-WAIVABLE CONSUMER RIGHTS OR MANDATORY LIABILITY RULES.

17. LIMITED INDEMNITY
If you use the Software in a business, commercial, organizational, professional, or other non-consumer capacity, then, to the maximum extent permitted by applicable law, you agree to defend, indemnify, and hold harmless the Developer and its licensors, affiliates, contractors, officers, employees, and agents from and against third-party claims, losses, damages, liabilities, costs, and expenses (including reasonable attorneys' fees) to the extent arising from:

a. your unlawful use or misuse of the Software;  

b. your breach of this Agreement;  

c. your violation of law, third-party rights, confidentiality obligations, or data protection obligations; or  

d. content, data, prompts, files, exports, or disclosures that you supplied, controlled, or transmitted through the Software, except to the extent the claim was caused by the Developer's own breach of law, fraud, gross negligence, or willful misconduct where such standards apply.

This Section does not apply to the extent prohibited by consumer protection law or other mandatory law.

18. TERMINATION
This Agreement terminates automatically if you materially fail to comply with its terms.

The Developer may suspend, terminate, or restrict your license to use the Software to the extent permitted by law and applicable platform rules.

Upon termination, you must cease use of the Software and uninstall or destroy any copies under your control, except to the extent continued access, archival copies, or re-download rights are governed by Microsoft Store entitlements, backup systems, or mandatory legal rights.

19. EXPORT, SANCTIONS, AND COMPLIANCE
You must comply with all domestic and international laws and regulations applicable to the Software and to your use of it, including export control, sanctions, trade, privacy, consumer protection, intellectual property, and sector-specific compliance rules where relevant.

You may not use, export, re-export, or transfer the Software in violation of applicable export control, sanctions, or trade laws.

20. GOVERNING LAW
If you acquired or use the Software as a consumer, the mandatory laws of the country, state, or province where you reside apply to the extent required by law, and nothing in this Agreement deprives you of non-waivable rights or remedies available under those laws.

If you do not use the Software as a consumer, this Agreement and any non-mandatory disputes arising out of or relating to it are governed by the laws of the Federative Republic of Brazil, excluding its conflict-of-law rules.

21. FORUM AND DISPUTES
If you are a consumer, you may bring claims in any forum that applicable law permits, and the Developer may bring claims only in forums permitted by applicable law.

If you are not a consumer, the courts located in Fortaleza, Ceará, Brazil will have non-exclusive jurisdiction over disputes arising out of or relating to this Agreement, unless mandatory law requires otherwise.

22. NO WAIVER OF MANDATORY RIGHTS
Nothing in this Agreement excludes, restricts, or waives any right, remedy, guarantee, warranty, protection, or condition that cannot lawfully be excluded, restricted, or waived under applicable law.

23. SEVERABILITY
If any provision of this Agreement is held invalid, unenforceable, or unlawful, that provision will be enforced to the maximum extent permissible and the remaining provisions will remain in full force and effect.

24. ENTIRE AGREEMENT
This Agreement, the then-current applicable Privacy Policy, any additional terms that accompany the Software, and any mandatory Microsoft Store or platform terms that apply, constitute the entire agreement between you and the Developer regarding the Software.

25. CONTACT AND LEGAL NOTICES
For legal, support, privacy, or licensing inquiries, you may contact the Developer at:

Email: besttoolsforever@outlook.com

The Developer may also identify current support, legal, or privacy contact channels in the Microsoft Store listing, within the Software, or on the Developer's then-current support or legal pages.

By installing, accessing, or using the Software, you acknowledge that you have read, understood, and agreed to this Agreement.

`
        },
        privacy: {
            title: "Privacy Policy",
            content: `
CODEFLATTEN PRO
PRIVACY POLICY
Version 1.0  
Last Updated: March 21, 2026

This Privacy Policy explains how Luiz E. L. Junior, doing business as BestToolsForever ("Developer," "we," "us," or "our"), handles personal data in connection with CodeFlatten PRO (the "App").

This Policy is intended to apply to the Microsoft Store version of the App and any other distribution of the App unless a distribution-specific notice or supplemental privacy notice states otherwise.

By using the App, you acknowledge that your use of the App may involve the processing of personal data as described in this Policy. This Policy should be read together with the App's End User License Agreement (EULA). If a matter specifically concerns privacy, personal data, or data protection, this Privacy Policy controls over the EULA to the extent of any direct conflict, except where mandatory law requires a different result.

1. WHO CONTROLS PERSONAL DATA COVERED BY THIS POLICY
The controller for personal data covered by this Policy is:

Luiz E. L. Junior / BestToolsForever  
Contact email: besttoolsforever@outlook.com

Where required by applicable law, additional contact or representative information may be provided in the App, in the Microsoft Store listing, or on the Developer's support or legal pages.

2. SCOPE OF THIS POLICY
This Policy covers personal data that we access, collect, receive, use, store, disclose, or otherwise process in connection with the App.

This Policy does not govern:
- personal data processed solely by Microsoft under Microsoft's own terms and privacy documentation, except to describe at a high level how Microsoft platform services may interact with the App;
- personal data processed solely by third-party services that you independently choose to use with the App; or
- data that has been irreversibly anonymized so that it no longer relates to an identified or identifiable person.

3. HOW THE APP GENERALLY WORKS
CodeFlatten PRO is designed to operate primarily on your local device. In ordinary use, the App may access and process files, folders, file names, folder names, paths, user-created settings, profiles, prompts, rules, logs, manifests, reports, and generated output on the device in order to provide its features.

Not all data that the App touches is sent to us. In many cases, information is processed locally and remains under your control unless:
- the App needs to interact with Microsoft platform or Store services;
- you contact us for support or send us information voluntarily;
- you choose to export, upload, synchronize, publish, or otherwise disclose information to a third party; or
- a specific feature clearly states that information will leave the device.

4. CATEGORIES OF PERSONAL DATA WE MAY PROCESS
Depending on how you use the App, how it is distributed, and which features are enabled, we may process the following categories of personal data.

4.1 Data You Provide Directly
This may include:
- your name, email address, and contact details if you contact us;
- the contents of support requests, bug reports, screenshots, logs, attachments, and correspondence you choose to send us;
- billing or order-reference information you choose to share when asking for support, although Microsoft generally manages Store transactions;
- any other information you intentionally submit to us.

4.2 Local App Data and User-Selected Content
This may include information that the App accesses locally on your device to perform requested operations, such as:
- selected files, folders, file names, folder names, paths, and directory structures;
- project materials, text content, prompts, templates, exclusion rules, profiles, preferences, destinations, manifests, reports, and output artifacts;
- local usage state needed to run the App's features, such as app configuration, UI preferences, local entitlement cache, and local workflow state.

This category may contain personal data if the files, paths, names, content, or outputs you choose to process include personal data.

4.3 Device, Technical, and Diagnostic Data
This may include:
- app version, package identity, operating system version, error state, crash state, reliability information, and basic technical diagnostics;
- license or entitlement status information needed to determine whether Premium Features are available;
- limited technical information associated with support, anti-abuse, troubleshooting, app security, or compatibility.

4.4 Microsoft Store and Platform Data
When the App is distributed through Microsoft channels or interacts with Microsoft platform features, Microsoft may process transaction, licensing, entitlement, crash, reliability, platform, and related data under Microsoft's own privacy terms. We may receive limited results, status signals, analytics, or error-reporting information from Microsoft where Microsoft makes such data available to developers or where such information is necessary for app operation, support, fraud prevention, or compliance.

4.5 Data from Third Parties You Choose to Use
If you use the App with third-party services such as AI platforms, cloud storage, repositories, editors, or collaboration tools, those services may receive data that you choose to send to them. We are not responsible for the privacy practices of those third parties.

4.6 Sensitive Personal Data
The App is not intended to require sensitive personal data for ordinary operation. Do not use the App to process or disclose sensitive personal data unless you have a lawful basis, adequate safeguards, and a real need to do so. If you voluntarily send sensitive personal data to us, we will process it only as reasonably necessary for the purpose for which it was provided and subject to applicable law.

5. SOURCES OF PERSONAL DATA
We may obtain personal data from the following sources:
- directly from you;
- from your use of the App on your device;
- from Microsoft, including Microsoft Store, entitlement, diagnostics, analytics, or other platform systems;
- from service providers acting on our behalf, where used;
- from third parties when you instruct or enable an integration or communication.

6. PURPOSES OF PROCESSING
We may process personal data for the following purposes, as applicable:
- to provide, operate, maintain, secure, and improve the App;
- to enable requested app features and preserve app functionality;
- to verify entitlement status and manage Premium Feature access;
- to troubleshoot, debug, monitor reliability, prevent abuse, and investigate incidents;
- to respond to support requests, communications, and legal inquiries;
- to comply with legal, regulatory, tax, accounting, consumer protection, and law-enforcement obligations;
- to establish, exercise, or defend legal claims;
- to protect our rights, users, systems, and business;
- to document product issues and support product quality;
- to provide notices, changes, and important information about the App.

We do not need to receive all categories of information described in this Policy in order for the App to function in every scenario. The categories and purposes that apply depend on how you use the App and which services are involved.

7. LEGAL BASES FOR PROCESSING
Depending on the jurisdiction and context, we may rely on one or more of the following legal bases:
- performance of a contract or steps taken at your request before entering into a contract;
- compliance with a legal or regulatory obligation;
- our legitimate interests, where applicable law allows and where those interests are not overridden by your rights and freedoms;
- your consent, where consent is required or where we choose to rely on consent;
- protection against fraud, abuse, security threats, or unlawful activity;
- protection of rights in judicial, administrative, or arbitral proceedings.

Where consent is required by applicable law, we will seek consent through an appropriate process and, where applicable law requires, provide a way to withdraw consent. Withdrawal of consent does not affect processing already carried out on a lawful basis before withdrawal.

8. WHEN DATA LEAVES YOUR DEVICE
Because the App is local-first, much of its processing may occur only on your device. However, information may leave your device in the following circumstances:
- when the App interacts with Microsoft Store, entitlement, update, crash, reliability, analytics, or platform services;
- when you use features that intentionally export, upload, sync, publish, or transmit data;
- when you contact us or send us support material;
- when a clearly disclosed feature or workflow sends data to a third party;
- when disclosure is required by law or reasonably necessary to protect rights, security, or the integrity of systems.

9. HOW WE SHARE PERSONAL DATA
We may share personal data only as reasonably necessary for the purposes described in this Policy, including with the following categories of recipients:

9.1 Microsoft
We may rely on Microsoft for distribution, commerce, licensing, entitlement, platform services, crash reporting, analytics, or related technical services. Microsoft processes personal data under Microsoft's own terms and privacy documentation.

9.2 Service Providers and Processors
We may use carefully selected service providers or processors to help with functions such as communications, support handling, hosting of legal or support pages, security, compliance, or similar operational needs. They may process personal data only on our instructions or as otherwise permitted by applicable law and their role.

9.3 Third Parties at Your Direction
We may disclose data to third parties when you ask us to do so, when you use a feature that intentionally sends data to a third party, or when you independently connect or use the App with a third-party service.

9.4 Legal and Safety Disclosures
We may disclose personal data if we reasonably believe disclosure is necessary to:
- comply with law, regulation, legal process, or enforceable governmental request;
- protect the rights, property, safety, or security of users, the public, the Developer, or the App;
- investigate fraud, abuse, or security incidents; or
- establish, exercise, or defend legal claims.

9.5 Business Transfers
If the App, business, or related assets are reorganized, sold, transferred, financed, or otherwise subject to a corporate transaction, personal data may be disclosed as part of that process subject to applicable law.

9.6 No Sale of Personal Data
We do not intentionally sell personal data in exchange for money.

10. THIRD-PARTY SERVICES AND EXTERNAL DESTINATIONS
The App may make it easier for you to prepare, export, or send content to third-party services, including AI, LLM, cloud, repository, or collaboration services. When you choose to send information to those services, their privacy terms and practices apply to the information they receive.

You are responsible for determining whether you have the right to disclose the relevant information to the third party and whether any consent, notice, contract, or regulatory step is required before you do so.

11. DATA RETENTION
We keep personal data only for as long as reasonably necessary for the purposes described in this Policy, unless a longer retention period is required or permitted by law.

In general:
- local files, settings, preferences, profiles, and content stored on your device remain under your control and are typically retained until you delete them, modify them, uninstall the App, or your device or storage environment changes them;
- support emails, support attachments, and correspondence may be retained for as long as reasonably necessary to respond, document issues, maintain records, resolve disputes, or comply with law;
- legal, accounting, tax, fraud-prevention, and compliance records may be retained for longer periods where required or justified;
- Microsoft-controlled Store, platform, commerce, diagnostics, analytics, or entitlement data are retained according to Microsoft's policies and systems, not this Policy alone.

When we no longer need personal data that is under our control, we will delete it, anonymize it, or securely isolate it as appropriate and reasonably feasible, subject to legal and operational requirements.

12. DATA SECURITY
We seek to use reasonable administrative, technical, and organizational measures designed to protect personal data under our control against unauthorized access, destruction, loss, alteration, or disclosure.

No system or method of storage, processing, or transmission is completely secure. You should also take steps to protect your own data, including maintaining backups, using appropriate device security, limiting unnecessary disclosure, and carefully reviewing content before exporting or sharing it.

13. INTERNATIONAL DATA TRANSFERS
We are based in Brazil, but personal data may be processed in other countries depending on the services involved, including Microsoft services, email infrastructure, hosting providers, or third-party services you choose to use.

Where applicable law requires safeguards for international transfers, we will seek to rely on a lawful transfer mechanism or another valid basis recognized by applicable law.

14. CHILDREN AND MINORS
The App is not directed to children for whom verifiable parental consent would be required under applicable law. We do not intentionally seek to collect personal data directly from children in a manner that would require such consent.

If you believe a child has provided personal data to us in a way that is not permitted by applicable law, contact us using the information in this Policy so that we can review the matter and take appropriate action.

15. YOUR RIGHTS AND CHOICES
Depending on your location and the applicable law, you may have rights such as the right to:
- confirm whether we process your personal data;
- access your personal data;
- correct incomplete, inaccurate, or outdated personal data;
- request anonymization, blocking, restriction, objection, or deletion in certain circumstances;
- request portability, where applicable;
- request information about sharing of your personal data;
- withdraw consent where processing is based on consent;
- request review of decisions where a law grants such a right;
- lodge a complaint with a competent supervisory authority.

Some of these rights are not absolute and may depend on the role we play in the processing, the technical context, legal exceptions, trade-secret protections, security considerations, and the law that applies to your request.

15.1 How to Exercise Rights
To make a privacy request, contact us at besttoolsforever@outlook.com and describe your request with enough detail for us to evaluate it. We may ask for information reasonably necessary to verify your identity and understand the scope of your request.

Where we do not control the relevant data, or where Microsoft or another third party independently controls the data, we may direct you to the relevant controller or platform.

16. MICROSOFT-SPECIFIC CONTEXT
If you obtained the App through the Microsoft Store or use Microsoft platform services with the App:
- Microsoft may independently process certain personal data under the Microsoft Privacy Statement and related Microsoft terms;
- Microsoft may provide us with limited analytics, diagnostics, crash, commerce, or entitlement-related information depending on platform settings and program features;
- some app functionality, update behavior, licensing state, and entitlement checks may depend on Microsoft systems outside our direct control.

For information about Microsoft's own data practices, please consult the Microsoft Privacy Statement and related Microsoft documentation.

17. REGION-SPECIFIC NOTES
17.1 Brazil / LGPD
If the Brazilian General Data Protection Law (LGPD) applies, you may have rights including confirmation of processing, access, correction, anonymization, blocking, deletion in certain cases, portability, information about sharing, information about the consequences of denying consent where consent is required, and revocation of consent where applicable.

17.2 Other Jurisdictions
If other privacy or consumer-protection laws apply to your use of the App, you may also have additional rights. We will handle requests in accordance with applicable law.

18. CHANGES TO THIS PRIVACY POLICY
We may update this Privacy Policy from time to time to reflect changes in the App, the law, our practices, Microsoft platform requirements, or third-party services used in connection with the App.

When we make material changes, we may update the date at the top of this Policy and, where appropriate, provide additional notice through the App, the Microsoft Store listing, or another reasonable channel.

19. CONTACT US
For privacy questions, requests, or complaints, contact:

BestToolsForever / Luiz E. L. Junior  
Email: besttoolsforever@outlook.com

If you contact us about privacy, please include enough information for us to understand your relationship to the App, the issue you are raising, and the country or state whose law you believe applies.

`
        },
        ack: {
            title: "Acknowledgements & Third-Party Notices",
            content: `CodeFlatten PRO
Acknowledgements & Third-Party Notices

CodeFlatten PRO may include or redistribute third-party software components.
Those components remain subject to their own copyright, license terms,
and notice requirements. This file identifies the third-party components
that were confirmed as relevant to the current distributed product package
based on the reviewed repository snapshot, package layout evidence, and
official upstream licensing sources.

======================================================================
CONFIRMED THIRD-PARTY COMPONENTS
======================================================================

1) Python
   Used for:
   - Bundled runtime/interpreter for the packaged desktop executable.

   License:
   - Python Software Foundation License Version 2.

   Copyright / attribution:
   - Copyright (c) 2001 Python Software Foundation.
   - All Rights Reserved.

   Notice summary:
   - Redistributions of Python software should retain the PSF License
     Agreement and the PSF copyright notice.
   - The exact Python version used in the reviewed build snapshot was not
     determinable from the repository dump alone.

   Official source:
   - https://docs.python.org/3/license.html

----------------------------------------------------------------------

2) Tcl/Tk
   Used for:
   - GUI toolkit/runtime used through Python's tkinter interface.

   License:
   - Tcl/Tk License Terms (permissive BSD-style).

   Copyright / attribution:
   - Copyright notices are held by the Regents of the University of
     California, Sun Microsystems, Inc., Scriptics Corporation, and other
     parties as reflected in the upstream Tcl/Tk licensing terms.

   Notice summary:
   - Existing copyright notices must be retained in all copies.
   - The Tcl/Tk license notice should accompany distributions that
     redistribute Tcl/Tk components.
   - The exact Tcl/Tk version used in the reviewed build snapshot was not
     determinable from the repository dump alone.

   Official sources:
   - https://www.tcl-lang.org/software/tcltk/license.html
   - https://docs.python.org/3/library/tkinter.html

----------------------------------------------------------------------

3) Pillow (friendly PIL fork)
   Used for:
   - Image handling in the desktop application (PIL.Image / PIL.ImageTk).

   License:
   - MIT-CMU License.

   Copyright / attribution:
   - Copyright (c) 1997-2011 Secret Labs AB.
   - Copyright (c) 1995-2011 Fredrik Lundh and contributors.
   - Copyright (c) 2010 Jeffrey A. Clark and contributors.

   Notice summary:
   - The copyright notice must appear in all copies.
   - The copyright notice and permission notice should appear in
     supporting documentation.
   - The names of Secret Labs AB or the author may not be used in
     advertising or publicity pertaining to distribution of the software
     without specific prior written permission.
   - The exact Pillow version used in the reviewed build snapshot was not
     determinable from the repository dump alone.

   Official sources:
   - https://pillow.readthedocs.io/en/stable/about.html
   - https://github.com/python-pillow/Pillow/blob/main/LICENSE

======================================================================
ADDITIONAL ACKNOWLEDGEMENT / PROJECT REFERENCE
======================================================================

GitHub Linguist (github-linguist/linguist)

   Why it appears here:
   - The reviewed snapshot shows a user-facing option labeled
     "Linguist Statistics (GitHub Style)" and generated output headed
     "GitHub Linguist Statistics".
   - This makes GitHub Linguist an appropriate project to acknowledge
     on the public site, even though the reviewed Windows package did not
     prove that the Ruby github-linguist library itself was redistributed
     inside the final packaged application.

   Important scope note:
   - This entry is included as an acknowledgement/reference entry.
   - It should not be read as a claim that the github-linguist gem, its
     vendor tree, or its Ruby/native dependencies were confirmed as bundled
     into the shipped CodeFlatten PRO package from the reviewed snapshot.

   License:
   - MIT License.

   Copyright / attribution:
   - Copyright (c) 2017 GitHub, Inc.

   Official sources:
   - https://github.com/github-linguist/linguist
   - https://github.com/github-linguist/linguist/blob/main/LICENSE

======================================================================
REVIEWED AND NOT INCLUDED IN THE CUSTOMER-FACING NOTICE LIST
======================================================================

The following items were reviewed but are not listed above as confirmed
customer-facing third-party notice entries for the current product package:

- PyInstaller
  Reviewed as build tooling. Official PyInstaller documentation states that
  executable bundles generated by PyInstaller may be shipped under any
  license compatible with bundled dependencies, and that PyInstaller's own
  license file or acknowledgements do not need to be included with the
  application.

- Windows SDK / Store packaging / validation tools
  Examples include makeappx.exe, signtool.exe, appcert.exe, MSBuild,
  Visual Studio toolchain components, and related build scripts. These were
  treated as build or validation tooling, not as customer-facing product
  components redistributed as part of CodeFlatten PRO.

- Microsoft Store / Partner Center platform services
  Reviewed as external distribution, entitlement, transaction, and
  diagnostics platform services, not as redistributed software components
  inside the product package.

- Product logos, icons, and Store artwork under CodeFlatten /
  BestToolsForever branding
  Reviewed as first-party assets, not third-party software notices.

- Legacy local-license artifacts preserved for history/audit only
  These were explicitly identified in the repository as legacy-only and not
  part of the Microsoft Store licensing model for the current CodeFlatten
  PRO product.

======================================================================
MANUAL CONFIRMATION STILL RECOMMENDED
======================================================================

The reviewed snapshot also shows a packaged ExplorerCommandVerb.dll inside
the Store/MSIX package layout. However, the local C/C++ source files for the
associated Explorer integration retain Microsoft copyright headers stating
"All rights reserved", while the likely upstream repository signal points to
Microsoft sample code under a separate repository-level license. Because the
reviewed snapshot does not include a pinned local provenance record or a
local license file for that copied subset, the exact customer-facing notice
text for that component should be manually confirmed before public release.

The reviewed snapshot also did not allow definitive confirmation of whether
winsdk / winrt Store API bindings were actually bundled into the final
customer package.

The reviewed snapshot did not prove that the github-linguist Ruby library
itself was bundled into the Windows package. If a future build vendors or
embeds GitHub Linguist directly, this file should be updated to move GitHub
Linguist from the acknowledgement/reference section into the confirmed
customer-facing notice list and, if applicable, to add any additional notices
required by the exact shipped dependency set.

======================================================================
BOTTOM LINE
======================================================================

Based on the reviewed repository dump and package evidence, the narrow,
production-oriented third-party notice set for CodeFlatten PRO is:
- Python
- Tcl/Tk
- Pillow

This file also includes a public-facing acknowledgement/reference entry for
GitHub Linguist because the reviewed product snapshot explicitly references
"Linguist Statistics (GitHub Style)" in the feature/UI layer.

This file is intentionally limited to components that were confirmed as
relevant to the current distributed product package without guessing at
unproven license provenance.`
        }
    }
};
