import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as ArrowDown, a as Phone, c as MessageCircle, d as Instagram, f as Gem, g as Award, h as Boxes, i as Sparkles, l as Menu, m as Crosshair, n as Upload, o as PenTool, p as FileDown, r as Timer, s as Package, t as X, u as MapPin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BU1DsbeV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WHATSAPP_NUMBER = "5562992973765";
function whatsappLink(message) {
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
var WA_ORCAMENTO = whatsappLink("Olá! Gostaria de solicitar um orçamento de personalização a laser.");
var WA_CATALOGO = whatsappLink("Olá! Gostaria de receber o catálogo completo da Suporte Laser em PDF.");
var links = [
	{
		href: "#sobre",
		label: "Sobre"
	},
	{
		href: "#processo",
		label: "Como funciona"
	},
	{
		href: "#categorias",
		label: "Categorias"
	},
	{
		href: "#galeria",
		label: "Galeria"
	},
	{
		href: "#catalogo",
		label: "Catálogo"
	}
];
function SiteHeader() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-ink/90 backdrop-blur-xl border-b border-ink-foreground/10" : "border-b border-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 md:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-baseline gap-2 text-ink-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg font-extrabold uppercase tracking-tight",
						children: "Suporte"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[10px] uppercase tracking-[0.4em] text-accent",
						children: "Laser"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-9 lg:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "font-mono text-[11px] uppercase tracking-[0.2em] text-ink-foreground/65 transition-colors hover:text-accent",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: WA_ORCAMENTO,
						target: "_blank",
						rel: "noreferrer",
						className: "btn-base btn-gold hidden px-5 py-3 sm:inline-flex",
						children: "Orçamento"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Abrir menu",
						onClick: () => setOpen((v) => !v),
						className: "text-ink-foreground lg:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-ink-foreground/10 bg-ink/95 px-6 pb-8 pt-4 backdrop-blur-xl lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col gap-5",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "font-display text-2xl font-bold uppercase tracking-tight text-ink-foreground",
					children: l.label
				}, l.href))
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "surface-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1500px] px-6 py-20 md:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl font-extrabold uppercase tracking-tight",
							children: "Suporte"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[10px] uppercase tracking-[0.4em] text-accent",
							children: "Laser"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xs text-sm leading-relaxed text-ink-muted",
						children: "Gravação e personalização a laser em metal, madeira, couro, vidro e aço. Peças únicas, acabamento impecável."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow-accent",
						children: "Contato"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-3 text-sm text-ink-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-accent" }), " (62) 99297-3765"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-accent" }), " Aparecida de Goiania · GO"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://instagram.com/suportte_laser",
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center gap-2 transition-colors hover:text-accent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4 text-accent" }), " @suportte_laser"]
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow-accent",
						children: "Navegação"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3 text-sm text-ink-muted",
						children: [
							["#sobre", "Sobre"],
							["#processo", "Como funciona"],
							["#categorias", "Categorias"],
							["#destaques", "Destaques"],
							["#galeria", "Galeria"],
							["#catalogo", "Catálogo"]
						].map(([href, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href,
							className: "transition-colors hover:text-accent",
							children: label
						}) }, href))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow-accent",
							children: "Orçamento"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm text-ink-muted",
							children: "Atendimento direto, sem intermediários."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: WA_ORCAMENTO,
							target: "_blank",
							rel: "noreferrer",
							className: "btn-base btn-gold mt-6",
							children: "Falar no WhatsApp"
						})
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col gap-3 border-t border-ink-foreground/10 pt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Suporte Laser"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Precisão · Acabamento · Exclusividade" })]
			})]
		})
	});
}
var hero_tumbler_default = "/assets/hero-tumbler-ConUwMzN.jpg";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-screen overflow-hidden surface-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_tumbler_default,
				alt: "Copo térmico preto com gravação a laser personalizada",
				width: 1600,
				height: 1200,
				className: "absolute inset-0 size-full object-cover object-right opacity-90"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "laser-grid absolute inset-0 opacity-60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "beam animate-beam absolute left-[14%] top-0 h-24 w-px" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "beam animate-beam absolute left-[62%] top-0 h-40 w-px",
						style: { animationDelay: "2.4s" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "beam animate-beam absolute left-[86%] top-0 h-16 w-px",
						style: { animationDelay: "4.1s" }
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex min-h-screen max-w-[1500px] flex-col justify-end px-6 pb-20 pt-36 md:px-12 md:pb-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow-accent",
						children: "Gravação a laser · Personalização"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "display-xl mt-7 max-w-4xl text-ink-foreground",
						children: [
							"Cada gravação",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"transforma um objeto",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"em ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent",
								children: "algo único"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-md text-base leading-relaxed text-ink-muted",
						children: "Precisão milimétrica em metal, madeira, couro e vidro. Do brinde corporativo ao presente que ninguém mais tem."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: WA_ORCAMENTO,
							target: "_blank",
							rel: "noreferrer",
							className: "btn-base btn-gold",
							children: "Solicitar orçamento"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#categorias",
							className: "btn-base btn-outline-ink text-ink-foreground",
							children: "Ver produtos"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4 animate-bounce text-accent" }), "Role para descobrir"]
					})
				]
			})
		]
	});
}
function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setVisible(true);
				io.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		style: { transitionDelay: `${delay}ms` },
		className: `reveal ${visible ? "is-visible" : ""} ${className}`,
		children
	});
}
var process_laser_default = "/assets/process-laser-2gKgMItz.jpg";
var faca_couro_default = "/assets/faca-couro-Dt8SdQjJ.png";
var cat_copos_default = "/assets/cat-copos-CQ2VWJ6L.jpg";
var cat_facas_default = "/assets/cat-facas-BfzUWyx3.jpg";
var cat_bones_default = "/assets/cat-bones-CMcOUsts.jpg";
var cat_tabuas_default = "/assets/cat-tabuas-BP0xmunk.jpg";
var cat_chaveiros_default = "/assets/cat-chaveiros-t0r-x8Ar.jpg";
var cat_brindes_default = "/assets/cat-brindes-C-rRJJfP.jpg";
var cta_bg_default = "/assets/cta-bg-Dhu-NzEz.jpg";
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "sobre",
		className: "scroll-mt-24 mx-auto max-w-[1500px] px-6 py-28 md:px-12 md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "01 — Sobre"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "display-lg mt-6 max-w-md",
					children: [
						"Objetos comuns.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Marcas ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: "permanentes"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-md text-base leading-relaxed text-muted-foreground",
					children: "A Suporte Laser nasceu da obsessão pelo detalhe. Trabalhamos com equipamentos de alta precisão para gravar superfícies difíceis com o mesmo rigor de uma manufatura relojoeira."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8",
					children: [
						["+5", "anos de ofício"],
						["+5k", "peças gravadas"],
						["0,1mm", "de precisão"]
					].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl font-extrabold tracking-tight",
						children: n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
						children: l
					})] }, l))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 80,
						className: "media-zoom col-span-2 aspect-[16/10]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: process_laser_default,
							alt: "Feixe de laser gravando um padrão em madeira",
							loading: "lazy",
							width: 1408,
							height: 1008,
							className: "size-full object-cover"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 160,
						className: "media-zoom aspect-square",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: faca_couro_default,
							alt: "Patch de couro gravado a laser sendo inspecionado",
							loading: "lazy",
							width: 1008,
							height: 1200,
							className: "size-full object-cover"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 220,
						className: "flex aspect-square flex-col justify-between bg-secondary p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gem, { className: "size-6 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-lg font-bold uppercase leading-tight tracking-tight",
							children: [
								"Acabamento",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"artesanal em",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"escala industrial"
							]
						})]
					})
				]
			})]
		})
	});
}
var steps = [
	{
		icon: Boxes,
		t: "Escolha o produto",
		d: "Copo, faca, tábua, couro ou qualquer superfície."
	},
	{
		icon: Upload,
		t: "Envie sua arte",
		d: "Logo, nome ou ideia. Nós ajustamos o vetor."
	},
	{
		icon: Crosshair,
		t: "Gravamos com precisão",
		d: "Calibração de potência para cada material."
	},
	{
		icon: Package,
		t: "Receba seu produto",
		d: "Conferido, embalado e pronto para entregar."
	}
];
function Steps() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "processo",
		className: "scroll-mt-24 surface-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1500px] px-6 py-28 md:px-12 md:py-40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow-accent",
				children: "02 — Como funciona"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display-lg mt-6 max-w-2xl text-ink-foreground",
				children: "Quatro etapas, zero improviso."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-20 grid gap-px border-t border-ink-foreground/10 md:grid-cols-4",
				children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					as: "li",
					delay: i * 110,
					className: "group relative border-b border-ink-foreground/10 py-10 md:border-b-0 md:border-r md:pr-8 md:last:border-r-0 md:[&:not(:first-child)]:pl-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-[10px] tracking-[0.3em] text-accent",
							children: ["0", i + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "mt-8 size-7 text-ink-foreground/80 transition-colors duration-500 group-hover:text-accent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 font-display text-xl font-bold uppercase tracking-tight text-ink-foreground",
							children: s.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-ink-muted",
							children: s.d
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-700 group-hover:w-full" })
					]
				}, s.t))
			})]
		})
	});
}
var categories = [
	{
		img: cat_copos_default,
		t: "Copos & Garrafas",
		n: "01",
		span: "lg:col-span-2 aspect-[16/11]"
	},
	{
		img: cat_facas_default,
		t: "Facas",
		n: "02",
		span: "aspect-[4/5]"
	},
	{
		img: cat_bones_default,
		t: "Bonés & Chapéus",
		n: "03",
		span: "aspect-[4/5]"
	},
	{
		img: cat_tabuas_default,
		t: "Tábuas de churrasco",
		n: "04",
		span: "aspect-[4/5]"
	},
	{
		img: cat_chaveiros_default,
		t: "Chaveiros & Canetas",
		n: "05",
		span: "aspect-[4/5]"
	},
	{
		img: cat_brindes_default,
		t: "Brindes corporativos",
		n: "06",
		span: "lg:col-span-2 aspect-[16/11]"
	}
];
function Categories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "categorias",
		className: "scroll-mt-24 mx-auto max-w-[1500px] px-6 py-28 md:px-12 md:py-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "flex flex-wrap items-end justify-between gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "03 — Categorias"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display-lg mt-6 max-w-xl",
				children: "O que gravamos"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-xs text-sm leading-relaxed text-muted-foreground",
				children: "Couro, presentes, canecas e qualquer objeto que aceite gravação. Se existe superfície, existe possibilidade."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
			children: categories.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i % 4 * 90,
				className: `media-zoom group relative bg-secondary ${c.span}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: whatsappLink(`Olá! Tenho interesse em ${c.t} personalizados.`),
					target: "_blank",
					rel: "noreferrer",
					className: "block size-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.img,
							alt: `${c.t} personalizados com gravação a laser`,
							loading: "lazy",
							className: "size-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg font-bold uppercase leading-tight tracking-tight text-ink-foreground",
								children: c.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] tracking-[0.3em] text-accent",
								children: c.n
							})]
						})
					]
				})
			}, c.t))
		})]
	});
}
var perks = [
	{
		icon: Crosshair,
		t: "Alta precisão"
	},
	{
		icon: Award,
		t: "Acabamento impecável"
	},
	{
		icon: MessageCircle,
		t: "Atendimento personalizado"
	},
	{
		icon: Timer,
		t: "Produção rápida"
	},
	{
		icon: Boxes,
		t: "Diversos materiais"
	},
	{
		icon: Sparkles,
		t: "Personalização exclusiva"
	}
];
function Perks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1500px] px-6 py-28 md:px-12 md:py-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow",
			children: "05 — Diferenciais"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "display-lg mt-6 max-w-xl",
			children: "Por que a Suporte Laser"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3",
			children: perks.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: i % 3 * 90,
				className: "group flex items-center gap-5 bg-background p-9 transition-colors duration-500 hover:bg-secondary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "size-6 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-base font-bold uppercase tracking-tight",
					children: p.t
				})]
			}, p.t))
		})]
	});
}
function Craft() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden surface-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1500px] gap-16 px-6 py-28 md:grid-cols-2 md:px-12 md:py-40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "media-zoom aspect-[4/5] md:aspect-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: process_laser_default,
					alt: "Máquina de gravação a laser em operação sobre madeira",
					loading: "lazy",
					className: "size-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 120,
				className: "flex flex-col justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow-accent",
						children: "06 — Processo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display-lg mt-6 text-ink-foreground",
						children: [
							"O feixe que",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"desenha no",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent",
								children: "material"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-md text-base leading-relaxed text-ink-muted",
						children: "Cada material exige um ajuste diferente de potência, velocidade e foco. É esse controle que separa uma marca borrada de um traço perfeito."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-12 grid grid-cols-2 gap-px bg-ink-foreground/10 sm:grid-cols-3",
						children: [
							"Madeira",
							"Metal",
							"Couro",
							"Vidro",
							"Aço",
							"Acrílico"
						].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "bg-ink px-5 py-6 font-mono text-[10px] uppercase tracking-[0.25em] text-ink-muted transition-colors hover:text-accent",
							children: m
						}, m))
					})
				]
			})]
		})
	});
}
function Catalog() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "catalogo",
		className: "scroll-mt-24 bg-secondary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-10 px-6 py-24 md:flex-row md:items-center md:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "08 — Catálogo"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display-md mt-5 max-w-lg",
				children: "Mais de 500 produtos personalizáveis em um PDF."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: WA_CATALOGO,
					target: "_blank",
					rel: "noreferrer",
					className: "btn-base btn-gold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "size-4" }), " Solicitar catálogo"]
				})
			})]
		})
	});
}
function FinalCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden surface-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: cta_bg_default,
				alt: "Máquina de gravação a laser trabalhando em ambiente escuro",
				loading: "lazy",
				width: 1600,
				height: 912,
				className: "absolute inset-0 size-full object-cover opacity-70"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto flex max-w-[1500px] flex-col items-center px-6 py-36 text-center md:px-12 md:py-52",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenTool, { className: "mx-auto size-7 text-accent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-8 max-w-3xl text-ink-foreground",
						children: "Vamos criar algo exclusivo para você?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-7 max-w-md text-base leading-relaxed text-ink-muted",
						children: "Envie sua ideia e receba um orçamento sem compromisso."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: WA_ORCAMENTO,
						target: "_blank",
						rel: "noreferrer",
						className: "btn-base btn-gold mt-10 px-10 py-5 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), " Falar no WhatsApp"]
					})
				] })
			})
		]
	});
}
function WhatsappFab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: WA_ORCAMENTO,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "Falar no WhatsApp",
		className: "fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform duration-300 hover:scale-105",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-6" })
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Categories, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Perks, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Craft, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Catalog, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappFab, {})
		]
	});
}
//#endregion
export { Index as component };
