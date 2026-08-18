<template>
    <div class="admin-login">
      <div class="login-card">
        <h1>🔐 Admin Login</h1>
        <p class="subtitle">Yemars Technology Admin Panel</p>
        
        <form @submit.prevent="login">
          <label>Email:</label>
          <input 
            type="email" 
            v-model="email" 
            placeholder="admin@yemars.ng"
            required
          >
          
          <label>Password:</label>
          <input 
            type="password" 
            v-model="password" 
            placeholder="Enter your password"
            required
          >
          
          <button type="submit" :disabled="loading">
            {{ loading ? 'Logging in...' : 'Login' }}
          </button>
          
          <div v-if="error" class="error-box">
            {{ error }}
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const supabase = useSupabaseClient()
  
  const email = ref('')
  const password = ref('')
  const loading = ref(false)
  const error = ref('')
  
  const login = async () => {
    loading.value = true
    error.value = ''
    
    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
      })
      
      if (authError) {
        error.value = authError.message
        return
      }
      
      if (data.user && data.user.email === 'uwem42020@gmail.com') {
        router.push('/admin/send-proposal')
      } else {
        await supabase.auth.signOut()
        error.value = 'You are not authorized to access this panel'
      }
      
    } catch (err) {
      error.value = 'Login failed. Please try again.'
    } finally {
      loading.value = false
    }
  }
  </script>
  
  <style scoped>
  .admin-login {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 120px 20px 60px;
    background: linear-gradient(135deg, #0A1F44, #0055FF, #6A0DAD);
  }
  
  .login-card {
    width: 100%;
    max-width: 400px;
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  }
  
  .login-card h1 {
    color: #0A1F44;
    font-size: 28px;
    margin-bottom: 5px;
    text-align: center;
  }
  
  .subtitle {
    color: #888;
    text-align: center;
    margin-bottom: 30px;
    font-size: 14px;
  }
  
  .login-card label {
    display: block;
    color: #555;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 14px;
  }
  
  .login-card input {
    width: 100%;
    padding: 14px 15px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 15px;
    margin-bottom: 20px;
    outline: none;
    transition: all 0.3s ease;
    box-sizing: border-box;
  }
  
  .login-card input:focus {
    border-color: #0055FF;
    box-shadow: 0 0 0 3px rgba(0, 85, 255, 0.1);
  }
  
  .login-card button {
    width: 100%;
    padding: 15px;
    background: linear-gradient(45deg, #0055FF, #6A0DAD);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
  }
  
  .login-card button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,85,255,0.3);
  }
  
  .login-card button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  .error-box {
    background: #f8d7da;
    color: #721c24;
    padding: 15px;
    border-radius: 8px;
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
    border: 1px solid #f5c6cb;
  }
  </style>