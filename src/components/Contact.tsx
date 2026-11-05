import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2, ArrowUpRight, ShieldCheck, Globe, Instagram, Phone } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/mapiarData';
import { ProposalFormData } from '../types';

export interface ContactRef {
  selectService: (serviceName: string) => void;
  focusForm: () => void;
}

export const Contact = forwardRef<ContactRef>((_props, ref) => {
  const [formData, setFormData] = useState<ProposalFormData>({
    nome: '',
    empresa: '',
    telefone: '',
    email: '',
    cultura: '',
    areaHa: '',
    municipioUf: '',
    servico: 'Restituição de linhas',
    mensagem: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<{
    proposalId: string;
    message: string;
  } | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  useImperativeHandle(ref, () => ({
    selectService: (serviceName: string) => {
      setFormData((prev) => ({ ...prev, servico: serviceName }));
      const formEl = document.getElementById('formulario');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
    },
    focusForm: () => {
      const formEl = document.getElementById('formulario');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }));

  const validate = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.nome.trim()) {
      errors.nome = 'Informe seu nome.';
    } else if (formData.nome.trim().length < 3) {
      errors.nome = 'Nome deve ter pelo menos 3 caracteres.';
    }

    if (!formData.telefone.trim()) {
      errors.telefone = 'Informe seu telefone ou WhatsApp.';
    } else if (formData.telefone.trim().length < 8) {
      errors.telefone = 'Telefone inválido.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Informe seu e-mail.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'E-mail com formato inválido.';
    }

    if (!formData.municipioUf.trim()) {
      errors.municipioUf = 'Informe o município e estado (UF).';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        if (data.errors) {
          setFormErrors(data.errors);
        }
        throw new Error(data.message || 'Erro ao processar contato.');
      }

      setSubmitSuccess({
        proposalId: data.proposalId || 'MAP-OK',
        message: data.message || 'Mensagem enviada com sucesso!'
      });
      setFormErrors({});
    } catch (err: any) {
      setServerError(
        err.message || 'Não foi possível conectar ao servidor. Você pode falar diretamente pelo WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendWhatsAppCopy = () => {
    const text = `*SOLICITAÇÃO DE ORÇAMENTO - MAPIAR*\n` +
      `*Nome:* ${formData.nome}\n` +
      (formData.empresa ? `*Empresa/Fazenda:* ${formData.empresa}\n` : '') +
      `*Telefone:* ${formData.telefone}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Cultura:* ${formData.cultura || 'Não informada'}\n` +
      `*Área:* ${formData.areaHa ? `${formData.areaHa} ha` : 'A combinar'}\n` +
      `*Município/UF:* ${formData.municipioUf}\n` +
      `*Serviço de Interesse:* ${formData.servico}\n` +
      (formData.mensagem ? `*Detalhes:* ${formData.mensagem}` : '');

    const url = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 sm:py-28 bg-[#03140c] text-white relative overflow-hidden">
      {/* Background radial accent & grid */}
      <div className="absolute inset-0 bg-agro-grid opacity-25 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-lime-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
            <span>Vamos Conversar · Atendimento Agronômico</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            PRONTO PARA MAPEAR A SUA <span className="text-lime-400">LAVOURA?</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl mx-auto mb-8 font-normal">
            Me conte a cultura, a área (ha) e o município — eu retorno com o caminho técnico e o orçamento detalhado. Atendimento a produtores e empresas em todo o Brasil.
          </p>

          {/* Quick Direct Actions */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-lime-400 hover:bg-lime-300 rounded-xl shadow-xl shadow-lime-500/20 hover:shadow-lime-400/30 transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chamar no WhatsApp</span>
            </a>

            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 hover:border-lime-400/50 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-lime-400" />
              <span>Enviar E-mail Direto</span>
            </a>
          </div>

          {/* Trust Meta Badges */}
          <div className="mt-8 text-neutral-300 text-xs sm:text-sm flex flex-wrap gap-4 sm:gap-6 justify-center items-center">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800">
              <Globe className="w-4 h-4 text-lime-400" />
              <span className="font-mono text-neutral-200">{COMPANY_INFO.website}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800">
              <Instagram className="w-4 h-4 text-lime-400" />
              <span className="text-neutral-200">{COMPANY_INFO.instagram}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800">
              <ShieldCheck className="w-4 h-4 text-lime-400" />
              <span className="text-neutral-200">{COMPANY_INFO.credentials}</span>
            </div>
          </div>
        </div>

        {/* Interactive Form Box in Dark DroneBox Aesthetic */}
        <div
          id="formulario"
          className="max-w-2xl mx-auto bg-neutral-900/95 text-white rounded-2xl p-6 sm:p-10 shadow-2xl border border-emerald-950/80 backdrop-blur-xl"
        >
          {submitSuccess ? (
            <div className="text-center py-6 space-y-5 animate-in fade-in duration-200">
              <div className="w-16 h-16 rounded-2xl bg-emerald-950/80 border border-lime-400/50 flex items-center justify-center text-lime-400 mx-auto shadow-lg shadow-lime-500/10">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-lime-400 uppercase tracking-wider bg-neutral-950 px-3 py-1 rounded-md border border-lime-400/30">
                  Protocolo: {submitSuccess.proposalId}
                </span>
                <h3 className="text-2xl font-bold text-white font-display mt-3">
                  Mensagem Enviada com Sucesso!
                </h3>
                <p className="text-sm text-neutral-300 mt-2 max-w-md mx-auto leading-relaxed">
                  {submitSuccess.message} Entraremos em contato com a proposta técnica.
                </p>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleSendWhatsAppCopy}
                  className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-lime-400 hover:bg-lime-300 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-lime-500/20 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar Cópia no WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <button
                  onClick={() => setSubmitSuccess(null)}
                  className="px-5 py-3 text-xs font-semibold text-neutral-400 hover:text-white bg-neutral-950 border border-neutral-800 rounded-xl transition-colors cursor-pointer"
                >
                  Nova Mensagem
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="border-b border-neutral-800 pb-4 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  Solicitar Proposta ou Ensaio
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Atendimento direto e análise pelo Engenheiro Agrônomo responsável.
                </p>
              </div>

              {serverError && (
                <div className="p-3 rounded-xl bg-red-950/70 border border-red-800 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{serverError}</span>
                </div>
              )}

              {/* Nome & Empresa */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nome" className="block text-xs font-bold text-neutral-300 uppercase tracking-wide mb-1.5">
                    Nome Completo *
                  </label>
                  <input
                    id="nome"
                    type="text"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Seu nome"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                  />
                  {formErrors.nome && <span className="text-xs text-red-400 mt-1 block">{formErrors.nome}</span>}
                </div>

                <div>
                  <label htmlFor="empresa" className="block text-xs font-bold text-neutral-300 uppercase tracking-wide mb-1.5">
                    Empresa / Fazenda
                  </label>
                  <input
                    id="empresa"
                    type="text"
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    placeholder="Nome da propriedade ou empresa"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Telefone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="telefone" className="block text-xs font-bold text-neutral-300 uppercase tracking-wide mb-1.5">
                    WhatsApp / Telefone *
                  </label>
                  <input
                    id="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    placeholder="(XX) 99999-9999"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                  />
                  {formErrors.telefone && <span className="text-xs text-red-400 mt-1 block">{formErrors.telefone}</span>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-neutral-300 uppercase tracking-wide mb-1.5">
                    E-mail *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seuemail@exemplo.com.br"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                  />
                  {formErrors.email && <span className="text-xs text-red-400 mt-1 block">{formErrors.email}</span>}
                </div>
              </div>

              {/* Cultura, Área & Município */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="cultura" className="block text-xs font-bold text-neutral-300 uppercase tracking-wide mb-1.5">
                    Cultura
                  </label>
                  <input
                    id="cultura"
                    type="text"
                    value={formData.cultura}
                    onChange={(e) => setFormData({ ...formData, cultura: e.target.value })}
                    placeholder="Ex: Soja, Cana..."
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="areaHa" className="block text-xs font-bold text-neutral-300 uppercase tracking-wide mb-1.5">
                    Área (ha)
                  </label>
                  <input
                    id="areaHa"
                    type="text"
                    value={formData.areaHa}
                    onChange={(e) => setFormData({ ...formData, areaHa: e.target.value })}
                    placeholder="Ex: 250 ha"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="municipioUf" className="block text-xs font-bold text-neutral-300 uppercase tracking-wide mb-1.5">
                    Município / UF *
                  </label>
                  <input
                    id="municipioUf"
                    type="text"
                    value={formData.municipioUf}
                    onChange={(e) => setFormData({ ...formData, municipioUf: e.target.value })}
                    placeholder="Cidade - UF"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                  />
                  {formErrors.municipioUf && <span className="text-xs text-red-400 mt-1 block">{formErrors.municipioUf}</span>}
                </div>
              </div>

              {/* Serviço Desejado */}
              <div>
                <label htmlFor="servico" className="block text-xs font-bold text-neutral-300 uppercase tracking-wide mb-1.5">
                  Serviço Principal
                </label>
                <select
                  id="servico"
                  value={formData.servico}
                  onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-sm text-white outline-none cursor-pointer"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title} className="bg-neutral-900 text-white">
                      {s.title}
                    </option>
                  ))}
                  <option value="Ensaio-Piloto para Empresa de Defensivos" className="bg-neutral-900 text-white">
                    Pesquisa / Ensaio-Piloto para Empresa de Defensivos
                  </option>
                  <option value="Outro Serviço Agronômico" className="bg-neutral-900 text-white">
                    Outro Serviço Agronômico com Drone
                  </option>
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="mensagem" className="block text-xs font-bold text-neutral-300 uppercase tracking-wide mb-1.5">
                  Mensagem / Observações
                </label>
                <textarea
                  id="mensagem"
                  rows={3}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  placeholder="Informações adicionais, cronograma da safra ou objetivo do levantamento..."
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-sm text-white placeholder-neutral-500 outline-none resize-none transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-950 bg-lime-400 hover:bg-lime-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-lime-500/20 hover:shadow-lime-400/30 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Processando envio...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar Solicitação de Orçamento</span>
                      <Send className="w-4 h-4 stroke-[2.5]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

