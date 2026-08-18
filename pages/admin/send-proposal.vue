<template>
    <div class="admin-page">
      <div class="container">
        <div class="admin-card">
          <h1>🔐 Admin: Send Proposal</h1>
          <p class="admin-info">Logged in as: uwem42020@gmail.com</p>
          
          <div class="email-form">
            <h3>Send LegallySwift Proposal</h3>
            
            <label>Recipient Email:</label>
            <input 
              type="email" 
              v-model="proposalEmail" 
              placeholder="client@example.com"
            >
            
            <label>Recipient Name:</label>
            <input 
              type="text" 
              v-model="recipientName" 
              placeholder="Client name"
            >
            
            <label>Subject:</label>
            <input 
              type="text" 
              v-model="emailSubject"
            >
            
            <button 
              @click="sendProposal" 
              :disabled="sendingProposal"
              class="send-btn"
            >
              {{ sendingProposal ? 'Sending...' : 'Send Proposal PDF' }}
            </button>
            
            <button 
              @click="logout"
              class="logout-btn"
            >
              Logout
            </button>
            
            <div v-if="proposalStatus" :class="proposalStatus.type" class="status-box">
              {{ proposalStatus.message }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const supabase = useSupabaseClient()
  
  const proposalEmail = ref('')
  const recipientName = ref('')
  const emailSubject = ref('Yemars Technology | LegallySwift Platform Proposal')
  const sendingProposal = ref(false)
  const proposalStatus = ref(null)
  
  const sendProposal = async () => {
    if (!proposalEmail.value || !proposalEmail.value.includes('@')) {
      proposalStatus.value = { type: 'error', message: 'Please enter a valid email address' }
      return
    }
  
    sendingProposal.value = true
    proposalStatus.value = null
  
    try {
      const response = await $fetch('/api/send-proposal', {
        method: 'POST',
        body: {
          to: proposalEmail.value,
          subject: emailSubject.value,
          recipientName: recipientName.value || 'Valued Partner',
          message: 'Thank you for your interest in Yemars Technology. Please find the comprehensive proposal for the development of the LegallySwift platform attached.'
        }
      })
  
      if (response.success) {
        proposalStatus.value = { type: 'success', message: '✅ Email sent successfully!' }
        proposalEmail.value = ''
        recipientName.value = ''
      } else {
        proposalStatus.value = { type: 'error', message: '❌ ' + response.message }
      }
    } catch (error) {
      console.error('Error sending proposal:', error)
      proposalStatus.value = { type: 'error', message: '❌ Failed to send. Please try again.' }
    } finally {
      sendingProposal.value = false
    }
  }
  
  const logout = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
  }
  </script>
  
  <style scoped>
  .admin-page {
    min-height: 100vh;
    padding: 150px 0 80px;
    background: linear-gradient(135deg, #f8f9ff, #f8f0ff);
  }
  
  .admin-card {
    max-width: 600px;
    margin: 0 auto;
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }
  
  .admin-card h1 {
    color: #0A1F44;
    font-size: 28px;
    margin-bottom: 10px;
    text-align: center;
  }
  
  .admin-info {
    text-align: center;
    color: #888;
    margin-bottom: 30px;
    font-size: 14px;
  }
  
  .email-form h3 {
    color: #0A1F44;
    margin-bottom: 20px;
  }
  
  .email-form label {
    display: block;
    color: #555;
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 14px;
  }
  
  .email-form input {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 15px;
    margin-bottom: 20px;
    outline: none;
    box-sizing: border-box;
    transition: all 0.3s ease;
  }
  
  .email-form input:focus {
    border-color: #0055FF;
    box-shadow: 0 0 0 3px rgba(0, 85, 255, 0.1);
  }
  
  .send-btn {
    width: 100%;
    padding: 15px;
    background: linear-gradient(45deg, #0055FF, #6A0DAD);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 10px;
    transition: all 0.3s ease;
  }
  
  .send-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,85,255,0.3);
  }
  
  .send-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  .logout-btn {
    width: 100%;
    padding: 15px;
    background: #dc3545;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .logout-btn:hover {
    background: #c82333;
  }
  
  .status-box {
    padding: 15px;
    border-radius: 8px;
    margin-top: 20px;
    font-weight: 500;
  }
  
  .status-box.success {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }
  
  .status-box.error {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
  
  @media (max-width: 767px) {
    .admin-page {
      padding: 120px 0 60px;
    }
    
    .admin-card {
      padding: 25px;
      margin: 0 15px;
    }
    
    .admin-card h1 {
      font-size: 24px;
    }
  }
  </style>