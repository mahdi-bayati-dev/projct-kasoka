
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wnqodakhivphyzonzbpm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InducW9kYWtoaXZwaHl6b256YnBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzNTI2MzAsImV4cCI6MjA0NTkyODYzMH0.yb5x52ShMjVTcw7qXW4t_mewdY0DSQisNYOTccxt9PY' // کلید anon/public خود را اینجا قرار دهید
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
