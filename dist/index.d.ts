import * as vue from 'vue';
import { Plugin } from 'vue';
import { CodeBlockNode as CodeBlockNode$1, BaseNode, ParseOptions, MarkdownIt } from 'stream-markdown-parser';
export * from 'stream-markdown-parser';
export { KATEX_COMMANDS, MathOptions, normalizeStandaloneBackslashT, setDefaultMathOptions } from 'stream-markdown-parser';

interface CodeBlockNodeProps {
    node: CodeBlockNode$1;
    isDark?: boolean;
    loading?: boolean;
    stream?: boolean;
    darkTheme?: any;
    lightTheme?: any;
    isShowPreview?: boolean;
    monacoOptions?: {
        [k: string]: any;
    };
    enableFontSizeControl?: boolean;
    minWidth?: string | number;
    maxWidth?: string | number;
    themes?: any[];
    showHeader?: boolean;
    showCopyButton?: boolean;
    showExpandButton?: boolean;
    showPreviewButton?: boolean;
    showFontSizeButtons?: boolean;
    customId?: string;
}
interface ImageNodeProps {
    node: {
        type: 'image';
        src: string;
        alt: string;
        title: string | null;
        raw: string;
        loading?: boolean;
    };
    fallbackSrc?: string;
    showCaption?: boolean;
    lazy?: boolean;
    svgMinHeight?: string;
    usePlaceholder?: boolean;
}
interface LinkNodeProps {
    node: {
        type: 'link';
        href: string;
        title: string | null;
        text: string;
        attrs?: [string, string][];
        children: {
            type: string;
            raw: string;
        }[];
        raw: string;
        loading?: boolean;
    };
    indexKey: number | string;
    customId?: string;
    showTooltip?: boolean;
    color?: string;
    underlineHeight?: number;
    underlineBottom?: number | string;
    animationDuration?: number;
    animationOpacity?: number;
    animationTiming?: string;
    animationIteration?: string | number;
}
interface PreCodeNodeProps {
    node: CodeBlockNode$1;
}
interface MermaidBlockNodeProps {
    node: CodeBlockNode$1;
    maxHeight?: string | null;
    loading?: boolean;
    isDark?: boolean;
    workerTimeoutMs?: number;
    parseTimeoutMs?: number;
    renderTimeoutMs?: number;
    fullRenderTimeoutMs?: number;
    showHeader?: boolean;
    showModeToggle?: boolean;
    showCopyButton?: boolean;
    showExportButton?: boolean;
    showFullscreenButton?: boolean;
    showCollapseButton?: boolean;
    showZoomControls?: boolean;
    enableWheelZoom?: boolean;
    isStrict?: boolean;
}
interface MermaidBlockEvent<TPayload = any> {
    payload?: TPayload;
    defaultPrevented: boolean;
    preventDefault: () => void;
    svgElement?: SVGElement | null;
    svgString?: string | null;
}
interface D2BlockNodeProps {
    node: CodeBlockNode$1;
    maxHeight?: string | null;
    loading?: boolean;
    isDark?: boolean;
    progressiveRender?: boolean;
    progressiveIntervalMs?: number;
    themeId?: number | null;
    darkThemeId?: number | null;
    showHeader?: boolean;
    showModeToggle?: boolean;
    showCopyButton?: boolean;
    showExportButton?: boolean;
    showCollapseButton?: boolean;
}
interface InfographicBlockNodeProps {
    node: CodeBlockNode$1;
    maxHeight?: string | null;
    loading?: boolean;
    isDark?: boolean;
    showHeader?: boolean;
    showModeToggle?: boolean;
    showCopyButton?: boolean;
    showCollapseButton?: boolean;
    showExportButton?: boolean;
    showFullscreenButton?: boolean;
    showZoomControls?: boolean;
}
interface MathBlockNodeProps {
    node: {
        type: 'math_block';
        content: string;
        raw: string;
        loading?: boolean;
    };
}
interface MathInlineNodeProps {
    node: {
        type: 'math_inline';
        content: string;
        raw: string;
        loading?: boolean;
        markup?: string;
    };
}

type AdmonitionKind = 'note' | 'info' | 'tip' | 'warning' | 'danger' | 'caution' | 'error';
interface AdmonitionNode {
    type: 'admonition';
    kind: AdmonitionKind;
    title?: string;
    children: {
        type: string;
        raw: string;
    }[];
    raw: string;
    collapsible?: boolean;
    open?: boolean;
}
type __VLS_Props$r = {
    node: AdmonitionNode;
    indexKey: number | string;
    isDark?: boolean;
    typewriter?: boolean;
    customId?: string;
};
declare const _default$w: vue.DefineComponent<__VLS_Props$r, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    copy: (...args: any[]) => void;
}, string, vue.PublicProps, Readonly<__VLS_Props$r> & Readonly<{
    onCopy?: (...args: any[]) => any;
}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {}, HTMLDivElement>;

interface NodeChild$a {
    type: string;
    raw: string;
    [key: string]: unknown;
}
interface BlockquoteNode {
    type: 'blockquote';
    children: NodeChild$a[];
    raw: string;
    cite?: string;
}
type __VLS_Props$q = {
    node: BlockquoteNode;
    indexKey: string | number;
    typewriter?: boolean;
    customId?: string;
};
declare const _default$v: vue.DefineComponent<__VLS_Props$q, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    copy: (text: string) => any;
}, string, vue.PublicProps, Readonly<__VLS_Props$q> & Readonly<{
    onCopy?: (text: string) => any;
}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {}, HTMLQuoteElement>;

type __VLS_Props$p = {
    node: {
        type: 'checkbox';
        checked: boolean;
        raw: string;
    };
};
declare const _default$u: vue.DefineComponent<__VLS_Props$p, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<__VLS_Props$p> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {}, HTMLSpanElement>;

type D2Loader = () => Promise<any> | any;
declare function setD2Loader(loader: D2Loader | null): void;
declare function enableD2(loader?: D2Loader): void;
declare function disableD2(): void;
declare function isD2Enabled(): boolean;

interface DefinitionItemNode {
    type: 'definition_item';
    term: {
        type: string;
        raw: string;
    }[];
    definition: {
        type: string;
        raw: string;
    }[];
    raw: string;
}
interface DefinitionListNode {
    type: 'definition_list';
    items: DefinitionItemNode[];
    raw: string;
}
type __VLS_Props$o = {
    node: DefinitionListNode;
    indexKey: string | number;
    typewriter?: boolean;
    customId?: string;
};
declare const _default$t: vue.DefineComponent<__VLS_Props$o, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    copy: (...args: any[]) => void;
}, string, vue.PublicProps, Readonly<__VLS_Props$o> & Readonly<{
    onCopy?: (...args: any[]) => any;
}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {}, HTMLDListElement>;

type __VLS_Props$n = {
    node: {
        type: 'emoji';
        name: string;
        markup: string;
        raw: string;
    };
};
declare const _default$s: vue.DefineComponent<__VLS_Props$n, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<__VLS_Props$n> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {}, HTMLSpanElement>;

interface NodeChild$9 {
    type: string;
    raw: string;
    [key: string]: unknown;
}
type __VLS_Props$m = {
    node: {
        type: 'emphasis';
        children: NodeChild$9[];
        raw: string;
    };
    customId?: string;
    indexKey?: number | string;
};
declare const _default$r: vue.DefineComponent<__VLS_Props$m, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<__VLS_Props$m> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {}, HTMLElement>;

type __VLS_Props$l = {
    node: {
        type: 'footnote_anchor';
        id: string;
        raw?: string;
    };
};
declare const _default$q: vue.DefineComponent<__VLS_Props$l, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<__VLS_Props$l> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {}, HTMLAnchorElement>;

interface FootnoteNode {
    type: 'footnote';
    id: string;
    children: {
        type: string;
        raw: string;
    }[];
    raw: string;
}
type __VLS_Props$k = {
    node: FootnoteNode;
    indexKey: string | number;
    typewriter?: boolean;
    customId?: string;
};
declare const _default$p: vue.DefineComponent<__VLS_Props$k, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    copy: (...args: any[]) => void;
}, string, vue.PublicProps, Readonly<__VLS_Props$k> & Readonly<{
    onCopy?: (...args: any[]) => any;
}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {}, HTMLDivElement>;

interface FootnoteReferenceNode {
    type: 'footnote_reference';
    id: string;
    raw: string;
}
type __VLS_Props$j = {
    node: FootnoteReferenceNode;
};
declare const _default$o: vue.DefineComponent<__VLS_Props$j, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<__VLS_Props$j> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {}, HTMLElement>;

interface HardBreakNode {
    type: 'hardbreak';
    raw: string;
}
type __VLS_Props$i = {
    node: HardBreakNode;
};
declare const _default$n: vue.DefineComponent<__VLS_Props$i, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<__VLS_Props$i> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {}, HTMLBRElement>;

declare const _HeadingNode: any;

interface NodeChild$8 {
    type: string;
    raw: string;
    [key: string]: unknown;
}
type __VLS_Props$h = {
    node: {
        type: 'highlight';
        children: NodeChild$8[];
        raw: string;
    };
    customId?: string;
    indexKey?: number | string;
};
declare const _default$m: vue.DefineComponent<__VLS_Props$h, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<__VLS_Props$h> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {}, HTMLElement>;

type __VLS_Props$g = {
    node: {
        content: string;
        raw?: string;
        tag?: string;
        attrs?: [string, string][] | null;
        loading?: boolean;
    };
    customId?: string;
};
declare function __VLS_template$3(): {
    attrs: Partial<{}>;
    slots: {
        placeholder?(_: {
            node: {
                content: string;
                raw?: string;
                tag?: string;
                attrs?: [string, string][] | null;
                loading?: boolean;
            };
        }): any;
    };
    refs: {
        htmlRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult$3 = ReturnType<typeof __VLS_template$3>;
declare const __VLS_component$3: vue.DefineComponent<__VLS_Props$g, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<__VLS_Props$g> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {
    htmlRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default$l: __VLS_WithTemplateSlots$3<typeof __VLS_component$3, __VLS_TemplateResult$3["slots"]>;

type __VLS_WithTemplateSlots$3<T, S> = T & {
    new (): {
        $slots: S;
    };
};

type __VLS_Props$f = {
    node: {
        type: 'html_inline';
        tag?: string;
        content: string;
        loading?: boolean;
        autoClosed?: boolean;
    };
    customId?: string;
};
declare const _default$k: vue.DefineComponent<__VLS_Props$f, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<__VLS_Props$f> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {
    containerRef: HTMLSpanElement;
}, any>;

declare function __VLS_template$2(): {
    attrs: Partial<{}>;
    slots: {
        placeholder?(_: {
            node: {
                type: "image";
                src: string;
                alt: string;
                title: string | null;
                raw: string;
                loading?: boolean;
            };
            displaySrc: string;
            imageLoaded: boolean;
            hasError: boolean;
            fallbackSrc: string;
            lazy: boolean;
            isSvg: boolean;
        }): any;
        error?(_: {
            node: {
                type: "image";
                src: string;
                alt: string;
                title: string | null;
                raw: string;
                loading?: boolean;
            };
            displaySrc: string;
            imageLoaded: boolean;
            hasError: true;
            fallbackSrc: string;
            lazy: boolean;
            isSvg: boolean;
        }): any;
    };
    refs: {
        figureRef: HTMLElement;
    };
    rootEl: HTMLElement;
};
type __VLS_TemplateResult$2 = ReturnType<typeof __VLS_template$2>;
declare const __VLS_component$2: vue.DefineComponent<ImageNodeProps, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {} & {
    click: (payload: [Event, string]) => any;
    error: (src: string) => any;
    load: (src: string) => any;
}, string, vue.PublicProps, Readonly<ImageNodeProps> & Readonly<{
    onClick?: (payload: [Event, string]) => any;
    onError?: (src: string) => any;
    onLoad?: (src: string) => any;
}>, {
    fallbackSrc: string;
    showCaption: boolean;
    lazy: boolean;
    svgMinHeight: string;
    usePlaceholder: boolean;
}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {
    figureRef: HTMLElement;
}, HTMLElement>;
declare const _default$j: __VLS_WithTemplateSlots$2<typeof __VLS_component$2, __VLS_TemplateResult$2["slots"]>;

type __VLS_WithTemplateSlots$2<T, S> = T & {
    new (): {
        $slots: S;
    };
};

type __VLS_Props$e = {
    node: {
        type: 'inline_code';
        code: string;
        raw: string;
    };
};
declare const _default$i: vue.DefineComponent<__VLS_Props$e, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<__VLS_Props$e> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {}, HTMLElement>;

interface NodeChild$7 {
    type: string;
    raw: string;
    [key: string]: unknown;
}
type __VLS_Props$d = {
    node: {
        type: 'insert';
        children: NodeChild$7[];
        raw: string;
    };
    customId?: string;
    indexKey?: number | string;
};
declare const _default$h: vue.DefineComponent<__VLS_Props$d, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<__VLS_Props$d> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {}, HTMLModElement>;

declare const _default$g: vue.DefineComponent<LinkNodeProps, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<LinkNodeProps> & Readonly<{}>, {
    showTooltip: boolean;
}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {}, any>;

interface NodeChild$6 {
    type: string;
    raw: string;
    [key: string]: unknown;
}
interface ListItem$1 {
    type: 'list_item';
    children: NodeChild$6[];
    raw: string;
}
type __VLS_Props$c = {
    /**
     * Preferred prop name for consistency with other node components.
     * `item` is kept for backward compatibility.
     */
    node?: ListItem$1;
    item?: ListItem$1;
    indexKey?: number | string;
    value?: number;
    customId?: string;
    /** Forwarded flag to enable/disable non-code node enter transition */
    typewriter?: boolean;
};
declare const _default$f: vue.DefineComponent<__VLS_Props$c, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    copy: (text: string) => any;
}, string, vue.PublicProps, Readonly<__VLS_Props$c> & Readonly<{
    onCopy?: (text: string) => any;
}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, HTMLLIElement>;

interface NodeChild$5 {
    type: string;
    raw: string;
    [key: string]: unknown;
}
interface ListItem {
    type: 'list_item';
    children: NodeChild$5[];
    raw: string;
}
type __VLS_Props$b = {
    node: {
        type: 'list';
        ordered: boolean;
        start?: number;
        items: ListItem[];
        raw: string;
    };
    customId?: string;
    indexKey?: number | string;
    typewriter?: boolean;
};
declare const _default$e: vue.DefineComponent<__VLS_Props$b, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    copy: (...args: any[]) => void;
}, string, vue.PublicProps, Readonly<__VLS_Props$b> & Readonly<{
    onCopy?: (...args: any[]) => any;
}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {}, any>;

type __VLS_Props$a = {
    node: {
        type: 'code_block';
        language: string;
        code: string;
        raw: string;
        diff?: boolean;
        originalCode?: string;
        updatedCode?: string;
    };
    loading?: boolean;
    /**
     * If true, update and render code content as it streams in.
     * If false, keep a lightweight loading state and create the editor only when loading becomes false.
     */
    stream?: boolean;
    darkTheme?: string;
    lightTheme?: string;
    isDark?: boolean;
    isShowPreview?: boolean;
    enableFontSizeControl?: boolean;
    /** Minimum width for the code block container (px or CSS unit string) */
    minWidth?: string | number;
    /** Maximum width for the code block container (px or CSS unit string) */
    maxWidth?: string | number;
    themes?: string[];
    /** Header visibility and controls */
    showHeader?: boolean;
    showCopyButton?: boolean;
    showExpandButton?: boolean;
    showPreviewButton?: boolean;
    showFontSizeButtons?: boolean;
};
declare function __VLS_template$1(): {
    attrs: Partial<{}>;
    slots: {
        'header-left'?(_: {}): any;
        'header-right'?(_: {}): any;
        loading?(_: {
            loading: boolean;
            stream: boolean;
        }): any;
    };
    refs: {
        codeBlockContent: HTMLDivElement;
        rendererTarget: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult$1 = ReturnType<typeof __VLS_template$1>;
declare const __VLS_component$1: vue.DefineComponent<__VLS_Props$a, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    copy: (...args: any[]) => void;
    previewCode: (...args: any[]) => void;
}, string, vue.PublicProps, Readonly<__VLS_Props$a> & Readonly<{
    onCopy?: (...args: any[]) => any;
    onPreviewCode?: (...args: any[]) => any;
}>, {
    isDark: boolean;
    loading: boolean;
    stream: boolean;
    darkTheme: string;
    lightTheme: string;
    isShowPreview: boolean;
    enableFontSizeControl: boolean;
    minWidth: string | number;
    maxWidth: string | number;
    showHeader: boolean;
    showCopyButton: boolean;
    showExpandButton: boolean;
    showPreviewButton: boolean;
    showFontSizeButtons: boolean;
}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {
    codeBlockContent: HTMLDivElement;
    rendererTarget: HTMLDivElement;
}, HTMLDivElement>;
declare const _default$d: __VLS_WithTemplateSlots$1<typeof __VLS_component$1, __VLS_TemplateResult$1["slots"]>;

type __VLS_WithTemplateSlots$1<T, S> = T & {
    new (): {
        $slots: S;
    };
};

type KatexLoader = () => Promise<any> | any;
declare function setKatexLoader(loader: KatexLoader | null): void;
declare function enableKatex(loader?: KatexLoader): void;
declare function disableKatex(): void;
declare function isKatexEnabled(): boolean;

type MermaidLoader = () => Promise<any> | any;
declare function setMermaidLoader(loader: MermaidLoader | null): void;
declare function enableMermaid(loader?: MermaidLoader): void;
declare function disableMermaid(): void;
declare function isMermaidEnabled(): boolean;

interface NodeRendererProps {
    content?: string;
    nodes?: BaseNode[];
    /**
     * Whether the input stream is complete (end-of-stream). When true, the parser
     * will stop emitting streaming "loading" nodes for unfinished constructs.
     */
    final?: boolean;
    /** Options forwarded to parseMarkdownToStructure when content is provided */
    parseOptions?: ParseOptions;
    customMarkdownIt?: (md: MarkdownIt) => MarkdownIt;
    /** Log parse/render timing and virtualization stats (dev only) */
    debugPerformance?: boolean;
    /**
     * Custom HTML-like tags that participate in streaming mid‑state handling
     * and are emitted as custom nodes (e.g. ['thinking']). Forwarded to `getMarkdown()`.
     */
    customHtmlTags?: readonly string[];
    /** Enable priority rendering for visible viewport area */
    viewportPriority?: boolean;
    /**
     * Whether code_block renders should stream updates.
     * When false, code blocks stay in a loading state and render once when final content is ready.
     * Default: true
     */
    codeBlockStream?: boolean;
    codeBlockDarkTheme?: any;
    codeBlockLightTheme?: any;
    codeBlockMonacoOptions?: Record<string, any>;
    /** If true, render all `code_block` nodes as plain <pre><code> blocks instead of the full CodeBlockNode */
    renderCodeBlocksAsPre?: boolean;
    /** Minimum width forwarded to CodeBlockNode (px or CSS unit) */
    codeBlockMinWidth?: string | number;
    /** Maximum width forwarded to CodeBlockNode (px or CSS unit) */
    codeBlockMaxWidth?: string | number;
    /** Arbitrary props to forward to every CodeBlockNode */
    codeBlockProps?: Record<string, any>;
    themes?: string[];
    isDark?: boolean;
    customId?: string;
    indexKey?: number | string;
    /** Enable/disable the non-code-node enter transition (typewriter). Default: true */
    typewriter?: boolean;
    /** Enable incremental/batched rendering of nodes to avoid large single flush costs. Default: true */
    batchRendering?: boolean;
    /** How many nodes to render immediately before batching kicks in. Default: 40 */
    initialRenderBatchSize?: number;
    /** How many additional nodes to render per batch tick. Default: 80 */
    renderBatchSize?: number;
    /** Extra delay (ms) before each batch after rAF; helps yield to input. Default: 16 */
    renderBatchDelay?: number;
    /** Target budget (ms) for each batch before we shrink subsequent batch sizes. Default: 6 */
    renderBatchBudgetMs?: number;
    /** Timeout (ms) for requestIdleCallback slices. Default: 120 */
    renderBatchIdleTimeoutMs?: number;
    /** Defer rendering nodes until they are near the viewport */
    deferNodesUntilVisible?: boolean;
    /** Maximum number of fully rendered nodes kept in DOM. Default: 320 */
    maxLiveNodes?: number;
    /** Number of nodes to keep before/after focus. Default: 60 */
    liveNodeBuffer?: number;
}
declare const _default$c: vue.DefineComponent<NodeRendererProps, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    copy: (...args: any[]) => void;
    handleArtifactClick: (...args: any[]) => void;
    click: (...args: any[]) => void;
    mouseover: (...args: any[]) => void;
    mouseout: (...args: any[]) => void;
}, string, vue.PublicProps, Readonly<NodeRendererProps> & Readonly<{
    onCopy?: (...args: any[]) => any;
    onHandleArtifactClick?: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
    onMouseover?: (...args: any[]) => any;
    onMouseout?: (...args: any[]) => any;
}>, {
    typewriter: boolean;
    codeBlockStream: boolean;
    batchRendering: boolean;
    debugPerformance: boolean;
    initialRenderBatchSize: number;
    renderBatchSize: number;
    renderBatchDelay: number;
    renderBatchBudgetMs: number;
    renderBatchIdleTimeoutMs: number;
    deferNodesUntilVisible: boolean;
    maxLiveNodes: number;
    liveNodeBuffer: number;
}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {
    containerRef: HTMLDivElement;
}, HTMLDivElement>;

interface NodeChild$4 {
    type: string;
    raw: string;
    [key: string]: unknown;
}
type __VLS_Props$9 = {
    node: {
        type: 'paragraph';
        children: NodeChild$4[];
        raw: string;
    };
    customId?: string;
    indexKey?: number | string;
};
declare const _default$b: vue.DefineComponent<__VLS_Props$9, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<__VLS_Props$9> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {}, HTMLParagraphElement>;

declare const _default$a: vue.DefineComponent<PreCodeNodeProps, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<PreCodeNodeProps> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {}, HTMLPreElement>;

type __VLS_Props$8 = {
    node: {
        type: 'reference';
        id: string;
        raw: string;
    };
    messageId?: string;
    threadId?: string;
};
declare const _default$9: vue.DefineComponent<__VLS_Props$8, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    click: (...args: any[]) => void;
    mouseEnter: (...args: any[]) => void;
    mouseLeave: (...args: any[]) => void;
}, string, vue.PublicProps, Readonly<__VLS_Props$8> & Readonly<{
    onClick?: (...args: any[]) => any;
    onMouseEnter?: (...args: any[]) => any;
    onMouseLeave?: (...args: any[]) => any;
}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {}, HTMLSpanElement>;

interface NodeChild$3 {
    type: string;
    raw: string;
    [key: string]: unknown;
}
type __VLS_Props$7 = {
    node: {
        type: 'strikethrough';
        children: NodeChild$3[];
        raw: string;
    };
    customId?: string;
    indexKey?: string | number;
};
declare const _default$8: vue.DefineComponent<__VLS_Props$7, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<__VLS_Props$7> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {}, HTMLModElement>;

interface NodeChild$2 {
    type: string;
    raw: string;
    [key: string]: unknown;
}
type __VLS_Props$6 = {
    node: {
        type: 'strong';
        children: NodeChild$2[];
        raw: string;
    };
    customId?: string;
    indexKey?: number | string;
};
declare const _default$7: vue.DefineComponent<__VLS_Props$6, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<__VLS_Props$6> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {}, HTMLElement>;

interface NodeChild$1 {
    type: string;
    raw: string;
    [key: string]: unknown;
}
type __VLS_Props$5 = {
    node: {
        type: 'subscript';
        children: NodeChild$1[];
        raw: string;
    };
    customId?: string;
    indexKey?: number | string;
};
declare const _default$6: vue.DefineComponent<__VLS_Props$5, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<__VLS_Props$5> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {}, HTMLElement>;

interface NodeChild {
    type: string;
    raw: string;
    [key: string]: unknown;
}
type __VLS_Props$4 = {
    node: {
        type: 'superscript';
        children: NodeChild[];
        raw: string;
    };
    customId?: string;
    indexKey?: number | string;
};
declare const _default$5: vue.DefineComponent<__VLS_Props$4, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<__VLS_Props$4> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {}, HTMLElement>;

interface TableCellNode {
    type: 'table_cell';
    header: boolean;
    children: {
        type: string;
        raw: string;
    }[];
    raw: string;
    align?: 'left' | 'right' | 'center';
}
interface TableRowNode {
    type: 'table_row';
    cells: TableCellNode[];
    raw: string;
}
interface TableNode {
    type: 'table';
    header: TableRowNode;
    rows: TableRowNode[];
    raw: string;
    loading: boolean;
}
type __VLS_Props$3 = {
    node: TableNode;
    indexKey: string | number;
    isDark?: boolean;
    typewriter?: boolean;
    customId?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        loading?(_: {
            isLoading: true;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: vue.DefineComponent<__VLS_Props$3, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    copy: (...args: any[]) => void;
}, string, vue.PublicProps, Readonly<__VLS_Props$3> & Readonly<{
    onCopy?: (...args: any[]) => any;
}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default$4: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

type __VLS_Props$2 = {
    node: {
        type: 'text';
        content: string;
        raw: string;
        center?: boolean;
    };
};
declare const _default$3: vue.DefineComponent<__VLS_Props$2, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    copy: (...args: any[]) => void;
}, string, vue.PublicProps, Readonly<__VLS_Props$2> & Readonly<{
    onCopy?: (...args: any[]) => any;
}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {}, HTMLSpanElement>;

declare const _default$2: vue.DefineComponent<{}, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, HTMLHRElement>;

type __VLS_Props$1 = {
    visible: boolean;
    anchorEl: HTMLElement | null;
    content: string;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    offset?: number;
    originX?: number | null;
    originY?: number | null;
    id?: string | null;
    isDark?: boolean | null;
};
declare const _default$1: vue.DefineComponent<__VLS_Props$1, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<__VLS_Props$1> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {
    tooltip: HTMLDivElement;
}, any>;

interface VmrContainerNode {
    type: 'vmr_container';
    name: string;
    loading?: boolean;
    attrs?: Record<string, string>;
    children: {
        type: string;
        raw: string;
    }[];
    raw: string;
}
type __VLS_Props = {
    node: VmrContainerNode;
    indexKey: number | string;
    isDark?: boolean;
    typewriter?: boolean;
    customId?: string;
};
declare const _default: vue.DefineComponent<__VLS_Props, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const defaultMap: Record<string, string>;
/**
 * Replace the entire default translation map.
 * Consumers can call this to provide their own fallback translations (e.g. Chinese).
 */
declare function setDefaultI18nMap(map: Record<keyof typeof defaultMap, string>): void;

interface CustomComponents {
    text: any;
    paragraph: any;
    heading: any;
    code_block: any;
    list: any;
    list_item: any;
    blockquote: any;
    table: any;
    definition_list: any;
    footnote: any;
    footnote_reference: any;
    admonition: any;
    hardbreak: any;
    link: any;
    image: any;
    thematic_break: any;
    math_inline: any;
    math_block: any;
    strong: any;
    emphasis: any;
    strikethrough: any;
    highlight: any;
    insert: any;
    subscript: any;
    superscript: any;
    emoji: any;
    checkbox: any;
    inline_code: any;
    html_inline: any;
    reference: any;
    mermaid: any;
    infographic: any;
    d2: any;
    [key: string]: any;
}

declare function setCustomComponents(id: string, mapping: Partial<CustomComponents>): void;
declare function setCustomComponents(mapping: Partial<CustomComponents>): void;
/**
 * Retrieve custom components for a given scope id.
 * If no id is provided, returns the legacy/global mapping (if any).
 */
declare function getCustomNodeComponents(customId?: string): Partial<CustomComponents>;
/**
 * Remove a scoped custom components mapping.
 * Use this to clean up mappings for dynamic or temporary renderers.
 */
declare function removeCustomComponents(id: string): void;
/**
 * Clear the legacy/global custom components mapping.
 * Use this when you want to remove the single-argument mapping set by
 * `setCustomComponents(mapping)`.
 */
declare function clearGlobalCustomComponents(): void;

declare function getUseMonaco(): Promise<any>;

type LanguageIconResolver = (lang: string) => string | undefined | null;
declare function setLanguageIconResolver(resolver?: LanguageIconResolver | null): void;
declare function normalizeLanguageIdentifier(lang?: string | null): string;
declare function resolveMonacoLanguageId(lang?: string | null): string;
declare function getLanguageIcon(lang: string): string;
declare const languageMap: Record<string, string>;

type KaTeXCDNWorkerMode = 'classic' | 'module';
interface KaTeXCDNWorkerOptions {
    /**
     * Where to load KaTeX from inside the worker.
     * - classic mode: UMD build (used via importScripts)
     * - module mode: ESM build (used via dynamic import(url))
     */
    katexUrl: string;
    /**
     * Optional mhchem plugin URL to load in the worker (recommended).
     * - classic mode: UMD build (importScripts)
     * - module mode: ESM build (dynamic import(url))
     */
    mhchemUrl?: string;
    /**
     * - classic: widest compatibility, uses importScripts()
     * - module: requires { type: 'module' } workers, uses import(url)
     */
    mode?: KaTeXCDNWorkerMode;
    /**
     * If set, worker prints verbose logs.
     */
    debug?: boolean;
    /**
     * Worker constructor options (name/type/credentials).
     * Note: for module mode you should pass { type: 'module' }.
     */
    workerOptions?: WorkerOptions;
    /**
     * KaTeX render options used in the worker.
     * Keep this minimal and stable for caching and predictable output.
     */
    renderOptions?: {
        throwOnError?: boolean;
        output?: string;
        strict?: string;
    };
}
interface KaTeXCDNWorkerHandle {
    worker: Worker | null;
    /**
     * Revoke the generated Blob URL. Call this when you no longer need the worker.
     * This does not terminate the worker automatically.
     */
    dispose: () => void;
    /**
     * The generated worker source code (useful for debugging/tests).
     */
    source: string;
}
declare function buildKaTeXCDNWorkerSource(options: KaTeXCDNWorkerOptions): string;
declare function createKaTeXWorkerFromCDN(options: KaTeXCDNWorkerOptions): KaTeXCDNWorkerHandle;

/**
 * Allow user to inject a Worker instance, e.g. from Vite ?worker import.
 */
declare function setKaTeXWorker(w: Worker): void;
/**
 * Remove the current worker instance (for cleanup or SSR).
 */
declare function clearKaTeXWorker(): void;
declare function setKaTeXWorkerDebug(enabled: boolean): void;
declare function renderKaTeXInWorker(content: string, displayMode?: boolean, timeout?: number, signal?: AbortSignal): Promise<string>;
declare function setKaTeXCache(content: string, displayMode: boolean, html: string): void;
/**
 * Utilities for clients to inspect/adjust worker load behavior
 */
declare function getKaTeXWorkerLoad(): {
    inFlight: number;
    max: number;
};
declare function setKaTeXWorkerMaxConcurrency(n: number): void;
declare const WORKER_BUSY_CODE = "WORKER_BUSY";
declare function isKaTeXWorkerBusy(): boolean;
declare function waitForKaTeXWorkerSlot(timeout?: number, signal?: AbortSignal): Promise<void>;
interface BackpressureOptions {
    timeout?: number;
    waitTimeout?: number;
    backoffMs?: number;
    maxRetries?: number;
    signal?: AbortSignal;
}
declare const defaultBackpressure: {
    timeout: number;
    waitTimeout: number;
    backoffMs: number;
    maxRetries: number;
};
declare function setKaTeXBackpressureDefaults(opts: Partial<typeof defaultBackpressure>): void;
declare function getKaTeXBackpressureDefaults(): {
    timeout: number;
    waitTimeout: number;
    backoffMs: number;
    maxRetries: number;
};
/**
 * Convenience wrapper: when worker reports busy, wait for a slot and retry.
 * Does not implement fallback-to-main-thread; leave that to the caller.
 */
declare function renderKaTeXWithBackpressure(content: string, displayMode?: boolean, opts?: BackpressureOptions): Promise<string>;

type MermaidCDNWorkerMode = 'classic' | 'module';
interface MermaidCDNWorkerOptions {
    /**
     * Where to load mermaid from inside the worker.
     * - classic mode: non-module build (used via importScripts)
     * - module mode: ESM build (used via dynamic import(url))
     */
    mermaidUrl: string;
    /**
     * - classic: widest compatibility, uses importScripts()
     * - module: requires { type: 'module' } workers, uses import(url)
     */
    mode?: MermaidCDNWorkerMode;
    /**
     * If set, worker prints verbose logs.
     */
    debug?: boolean;
    /**
     * Worker constructor options (name/type/credentials).
     * Note: for module mode you should pass { type: 'module' }.
     */
    workerOptions?: WorkerOptions;
    /**
     * Mermaid initialize options used in the worker.
     * This worker is used for parsing only; keep options minimal.
     */
    initializeOptions?: Record<string, any>;
}
interface MermaidCDNWorkerHandle {
    worker: Worker | null;
    dispose: () => void;
    source: string;
}
declare function buildMermaidCDNWorkerSource(options: MermaidCDNWorkerOptions): string;
declare function createMermaidWorkerFromCDN(options: MermaidCDNWorkerOptions): MermaidCDNWorkerHandle;

type Theme = 'light' | 'dark';
declare function setMermaidWorkerClientDebug(enabled: boolean): void;
declare function setMermaidWorkerMaxConcurrency(n: number): void;
declare function getMermaidWorkerLoad(): {
    inFlight: number;
    max: number;
};
declare const MERMAID_WORKER_BUSY_CODE = "WORKER_BUSY";
declare const MERMAID_DISABLED_CODE = "MERMAID_DISABLED";
/**
 * Allow user to inject a Worker instance, e.g. from Vite ?worker import.
 */
declare function setMermaidWorker(w: Worker): void;
/**
 * Remove the current worker instance (for cleanup or SSR).
 */
declare function clearMermaidWorker(): void;
declare function canParseOffthread(code: string, theme: Theme, timeout?: number): Promise<boolean>;
declare function findPrefixOffthread(code: string, theme: Theme, timeout?: number): Promise<string>;
declare function terminateWorker(): void;

declare const CodeBlockNode: {
    new (...args: any[]): vue.CreateComponentPublicInstanceWithMixins<Readonly<CodeBlockNodeProps> & Readonly<{
        onCopy?: (...args: any[]) => any;
        onPreviewCode?: (...args: any[]) => any;
    }>, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        copy: (...args: any[]) => void;
        previewCode: (...args: any[]) => void;
    }, vue.PublicProps, {
        loading: boolean;
        stream: boolean;
        darkTheme: any;
        lightTheme: any;
        isShowPreview: boolean;
        enableFontSizeControl: boolean;
        minWidth: string | number;
        maxWidth: string | number;
        showHeader: boolean;
        showCopyButton: boolean;
        showExpandButton: boolean;
        showPreviewButton: boolean;
        showFontSizeButtons: boolean;
    }, false, {}, {}, vue.GlobalComponents, vue.GlobalDirectives, string, {
        container: HTMLDivElement;
        codeEditor: HTMLDivElement;
    }, any, vue.ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<CodeBlockNodeProps> & Readonly<{
        onCopy?: (...args: any[]) => any;
        onPreviewCode?: (...args: any[]) => any;
    }>, {}, {}, {}, {}, {
        loading: boolean;
        stream: boolean;
        darkTheme: any;
        lightTheme: any;
        isShowPreview: boolean;
        enableFontSizeControl: boolean;
        minWidth: string | number;
        maxWidth: string | number;
        showHeader: boolean;
        showCopyButton: boolean;
        showExpandButton: boolean;
        showPreviewButton: boolean;
        showFontSizeButtons: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & vue.ComponentOptionsBase<Readonly<CodeBlockNodeProps> & Readonly<{
    onCopy?: (...args: any[]) => any;
    onPreviewCode?: (...args: any[]) => any;
}>, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    copy: (...args: any[]) => void;
    previewCode: (...args: any[]) => void;
}, string, {
    loading: boolean;
    stream: boolean;
    darkTheme: any;
    lightTheme: any;
    isShowPreview: boolean;
    enableFontSizeControl: boolean;
    minWidth: string | number;
    maxWidth: string | number;
    showHeader: boolean;
    showCopyButton: boolean;
    showExpandButton: boolean;
    showPreviewButton: boolean;
    showFontSizeButtons: boolean;
}, {}, string, {}, vue.GlobalComponents, vue.GlobalDirectives, string, vue.ComponentProvideOptions> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    $slots: {
        'header-left'?(_: {}): any;
        'header-right'?(_: {}): any;
        loading?(_: {
            loading: boolean;
            stream: boolean;
        }): any;
    };
});
declare const MathBlockNode: vue.DefineComponent<MathBlockNodeProps, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<MathBlockNodeProps> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {
    containerEl: HTMLDivElement;
    mathBlockElement: HTMLDivElement;
}, HTMLDivElement>;
declare const MathInlineNode: {
    new (...args: any[]): vue.CreateComponentPublicInstanceWithMixins<Readonly<MathInlineNodeProps> & Readonly<{}>, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, vue.PublicProps, {}, false, {}, {}, vue.GlobalComponents, vue.GlobalDirectives, string, {
        containerEl: HTMLSpanElement;
        mathElement: HTMLSpanElement;
    }, HTMLSpanElement, vue.ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<MathInlineNodeProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & vue.ComponentOptionsBase<Readonly<MathInlineNodeProps> & Readonly<{}>, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, {}, {}, string, {}, vue.GlobalComponents, vue.GlobalDirectives, string, vue.ComponentProvideOptions> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    $slots: {
        loading?(_: {
            isLoading: true;
        }): any;
    };
});
declare const MermaidBlockNode: {
    new (...args: any[]): vue.CreateComponentPublicInstanceWithMixins<Readonly<MermaidBlockNodeProps> & Readonly<{
        onCopy?: (...args: any[]) => any;
        onExport?: (...args: any[]) => any;
        onOpenModal?: (...args: any[]) => any;
        onToggleMode?: (...args: any[]) => any;
    }>, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        copy: (...args: any[]) => void;
        export: (...args: any[]) => void;
        openModal: (...args: any[]) => void;
        toggleMode: (...args: any[]) => void;
    }, vue.PublicProps, {
        loading: boolean;
        showHeader: boolean;
        showCopyButton: boolean;
        maxHeight: string | null;
        workerTimeoutMs: number;
        parseTimeoutMs: number;
        renderTimeoutMs: number;
        fullRenderTimeoutMs: number;
        showModeToggle: boolean;
        showExportButton: boolean;
        showFullscreenButton: boolean;
        showCollapseButton: boolean;
        showZoomControls: boolean;
        enableWheelZoom: boolean;
        isStrict: boolean;
    }, false, {}, {}, vue.GlobalComponents, vue.GlobalDirectives, string, {
        modeContainerRef: HTMLDivElement;
        mermaidContainer: HTMLDivElement;
        mermaidContent: HTMLDivElement;
        modalContent: HTMLDivElement;
    }, HTMLDivElement, vue.ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<MermaidBlockNodeProps> & Readonly<{
        onCopy?: (...args: any[]) => any;
        onExport?: (...args: any[]) => any;
        onOpenModal?: (...args: any[]) => any;
        onToggleMode?: (...args: any[]) => any;
    }>, {}, {}, {}, {}, {
        loading: boolean;
        showHeader: boolean;
        showCopyButton: boolean;
        maxHeight: string | null;
        workerTimeoutMs: number;
        parseTimeoutMs: number;
        renderTimeoutMs: number;
        fullRenderTimeoutMs: number;
        showModeToggle: boolean;
        showExportButton: boolean;
        showFullscreenButton: boolean;
        showCollapseButton: boolean;
        showZoomControls: boolean;
        enableWheelZoom: boolean;
        isStrict: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & vue.ComponentOptionsBase<Readonly<MermaidBlockNodeProps> & Readonly<{
    onCopy?: (...args: any[]) => any;
    onExport?: (...args: any[]) => any;
    onOpenModal?: (...args: any[]) => any;
    onToggleMode?: (...args: any[]) => any;
}>, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    copy: (...args: any[]) => void;
    export: (...args: any[]) => void;
    openModal: (...args: any[]) => void;
    toggleMode: (...args: any[]) => void;
}, string, {
    loading: boolean;
    showHeader: boolean;
    showCopyButton: boolean;
    maxHeight: string | null;
    workerTimeoutMs: number;
    parseTimeoutMs: number;
    renderTimeoutMs: number;
    fullRenderTimeoutMs: number;
    showModeToggle: boolean;
    showExportButton: boolean;
    showFullscreenButton: boolean;
    showCollapseButton: boolean;
    showZoomControls: boolean;
    enableWheelZoom: boolean;
    isStrict: boolean;
}, {}, string, {}, vue.GlobalComponents, vue.GlobalDirectives, string, vue.ComponentProvideOptions> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    $slots: {
        'header-left'?(_: {}): any;
        'header-center'?(_: {}): any;
        'header-right'?(_: {}): any;
    };
});
declare const InfographicBlockNode: {
    new (...args: any[]): vue.CreateComponentPublicInstanceWithMixins<Readonly<InfographicBlockNodeProps> & Readonly<{
        onCopy?: (...args: any[]) => any;
        onExport?: (...args: any[]) => any;
        onOpenModal?: (...args: any[]) => any;
    }>, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        copy: (...args: any[]) => void;
        export: (...args: any[]) => void;
        openModal: (...args: any[]) => void;
    }, vue.PublicProps, {
        loading: boolean;
        showHeader: boolean;
        showCopyButton: boolean;
        maxHeight: string | null;
        showModeToggle: boolean;
        showExportButton: boolean;
        showFullscreenButton: boolean;
        showCollapseButton: boolean;
        showZoomControls: boolean;
    }, false, {}, {}, vue.GlobalComponents, vue.GlobalDirectives, string, {
        infographicContainer: HTMLDivElement;
        modalContent: HTMLDivElement;
    }, HTMLDivElement, vue.ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<InfographicBlockNodeProps> & Readonly<{
        onCopy?: (...args: any[]) => any;
        onExport?: (...args: any[]) => any;
        onOpenModal?: (...args: any[]) => any;
    }>, {}, {}, {}, {}, {
        loading: boolean;
        showHeader: boolean;
        showCopyButton: boolean;
        maxHeight: string | null;
        showModeToggle: boolean;
        showExportButton: boolean;
        showFullscreenButton: boolean;
        showCollapseButton: boolean;
        showZoomControls: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & vue.ComponentOptionsBase<Readonly<InfographicBlockNodeProps> & Readonly<{
    onCopy?: (...args: any[]) => any;
    onExport?: (...args: any[]) => any;
    onOpenModal?: (...args: any[]) => any;
}>, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    copy: (...args: any[]) => void;
    export: (...args: any[]) => void;
    openModal: (...args: any[]) => void;
}, string, {
    loading: boolean;
    showHeader: boolean;
    showCopyButton: boolean;
    maxHeight: string | null;
    showModeToggle: boolean;
    showExportButton: boolean;
    showFullscreenButton: boolean;
    showCollapseButton: boolean;
    showZoomControls: boolean;
}, {}, string, {}, vue.GlobalComponents, vue.GlobalDirectives, string, vue.ComponentProvideOptions> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    $slots: {
        'header-left'?(_: {}): any;
        'header-center'?(_: {}): any;
        'header-right'?(_: {}): any;
    };
});
declare const D2BlockNode: vue.DefineComponent<D2BlockNodeProps, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<D2BlockNodeProps> & Readonly<{}>, {
    loading: boolean;
    showHeader: boolean;
    showCopyButton: boolean;
    maxHeight: string | null;
    showModeToggle: boolean;
    showExportButton: boolean;
    showCollapseButton: boolean;
    progressiveRender: boolean;
    progressiveIntervalMs: number;
}, {}, {}, {}, string, vue.ComponentProvideOptions, false, {
    bodyRef: HTMLDivElement;
}, HTMLDivElement>;

declare const VueRendererMarkdown: Plugin;

export { _default$w as AdmonitionNode, BackpressureOptions, _default$v as BlockquoteNode, _default$u as CheckboxNode, CodeBlockNode, CodeBlockNodeProps, D2BlockNode, D2BlockNodeProps, D2Loader, _default$t as DefinitionListNode, _default$s as EmojiNode, _default$r as EmphasisNode, _default$q as FootnoteAnchorNode, _default$p as FootnoteNode, _default$o as FootnoteReferenceNode, _default$n as HardBreakNode, _HeadingNode as HeadingNode, _default$m as HighlightNode, _default$l as HtmlBlockNode, _default$k as HtmlInlineNode, _default$j as ImageNode, ImageNodeProps, InfographicBlockNode, InfographicBlockNodeProps, _default$i as InlineCodeNode, _default$h as InsertNode, KaTeXCDNWorkerHandle, KaTeXCDNWorkerMode, KaTeXCDNWorkerOptions, KatexLoader, LanguageIconResolver, _default$g as LinkNode, LinkNodeProps, _default$f as ListItemNode, _default$e as ListNode, MERMAID_DISABLED_CODE, MERMAID_WORKER_BUSY_CODE, _default$d as MarkdownCodeBlockNode, _default$c as MarkdownRender, MathBlockNode, MathBlockNodeProps, MathInlineNode, MathInlineNodeProps, MermaidBlockEvent, MermaidBlockNode, MermaidBlockNodeProps, MermaidCDNWorkerHandle, MermaidCDNWorkerMode, MermaidCDNWorkerOptions, MermaidLoader, NodeRendererProps, _default$b as ParagraphNode, _default$a as PreCodeNode, PreCodeNodeProps, _default$9 as ReferenceNode, _default$8 as StrikethroughNode, _default$7 as StrongNode, _default$6 as SubscriptNode, _default$5 as SuperscriptNode, _default$4 as TableNode, _default$3 as TextNode, _default$2 as ThematicBreakNode, _default$1 as Tooltip, _default as VmrContainerNode, VueRendererMarkdown, WORKER_BUSY_CODE, buildKaTeXCDNWorkerSource, buildMermaidCDNWorkerSource, canParseOffthread, clearGlobalCustomComponents, clearKaTeXWorker, clearMermaidWorker, createKaTeXWorkerFromCDN, createMermaidWorkerFromCDN, _default$c as default, disableD2, disableKatex, disableMermaid, enableD2, enableKatex, enableMermaid, findPrefixOffthread, getCustomNodeComponents, getKaTeXBackpressureDefaults, getKaTeXWorkerLoad, getLanguageIcon, getMermaidWorkerLoad, getUseMonaco, isD2Enabled, isKaTeXWorkerBusy, isKatexEnabled, isMermaidEnabled, languageMap, normalizeLanguageIdentifier, removeCustomComponents, renderKaTeXInWorker, renderKaTeXWithBackpressure, resolveMonacoLanguageId, setCustomComponents, setD2Loader, setDefaultI18nMap, setKaTeXBackpressureDefaults, setKaTeXCache, setKaTeXWorker, setKaTeXWorkerDebug, setKaTeXWorkerMaxConcurrency, setKatexLoader, setLanguageIconResolver, setMermaidLoader, setMermaidWorker, setMermaidWorkerClientDebug, setMermaidWorkerMaxConcurrency, terminateWorker, waitForKaTeXWorkerSlot };
