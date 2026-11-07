'use client'

import { useEffect } from 'react'

export function RevealObserver() {
  useEffect(() => {
    const targets = new Set<Element>()
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
        targets.delete(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' })

    const observeTargets = () => {
      document.querySelectorAll('[data-reveal]').forEach((target) => {
        if (targets.has(target) || target.classList.contains('is-visible')) return
        target.classList.add('reveal-ready')
        targets.add(target)
        observer.observe(target)
      })
    }

    observeTargets()
    const mutations = new MutationObserver(observeTargets)
    mutations.observe(document.body, { childList: true, subtree: true })

    return () => {
      mutations.disconnect()
      observer.disconnect()
      targets.clear()
    }
  }, [])

  return null
}
